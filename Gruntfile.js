'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var pushState = require('grunt-connect-pushstate/lib/utils').pushState;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var appConfig = {
    app: 'app',
    dist: 'dist'
  };

  try {
    appConfig.app = require('./bower.json').appPath || appConfig.app;
  } catch (e) {}

  grunt.initConfig({

    config: appConfig,

    browser_sync: {
      options: {
        watchTask: true
      },
      bsFiles: {
        src: [
        '<%= config.app %>/styles/*.css',
        '<%= config.app %>/**/*.html',
        '<%= config.app %>/**/*.js'
        ]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
          '.tmp',
          '<%= config.dist %>/*',
          '<%= config.dist %>/.git*',
          ]
        }]
      },
      server: '.tmp'
    },
    
    compass: {
      options: {
        sassDir: '<%= config.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= config.app %>/images',
        javascriptsDir: '<%= config.app %>/scripts',
        fontsDir: '<%= config.app %>/styles/fonts',
        importPath: '<%= config.app %>/components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false
      },
      dist: {},
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    concurrent: {
      server: [
      'compass:server'
      ],
      test: [
      'compass'
      ],
      dist: {
        tasks: [
        'compass:dist',
        'imagemin',
        'htmlmin'
        ],
        options: {
          limit: 4
        }
      }
    },

    connect: {
      options: {
        port: 8080,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
            lrSnippet,
            pushState(),
            mountFolder(connect, '.tmp'),
            mountFolder(connect, 'app')
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
            mountFolder(connect, '.tmp'),
            mountFolder(connect, 'test')
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
            mountFolder(connect, appConfig.dist)
            ];
          }
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
          '*.{ico,png,txt,xml}',
          'components/**/*',
        'images/{,*/}*.{gif,webp,svg}',
        'fonts/*'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: '<%= config.dist %>/images',
        src: [
        'generated/*'
        ]
      }]
    },
    update: {
      expand: true,
      cwd: '<%= config.dist %>/scripts/',
      src: '*',
      dest: '<%= config.dist %>/scripts',
    }
  },

  cssmin: {
    dist: {
     files: [{
      expand: true,
      cwd: '.tmp/styles/',
      src: [
      '**/*.css',
      '!**/components/**/*.css'
      ],
      dest: '<%= config.dist %>/styles/',
      ext: '.css'
    }]
  }
},

// Docular: http://grunt-docular.com/
docular: {
  docular_webapp_target : "documentation",
  groups: [
  {
    groupTitle: 'Simian Website',
    groupId: 'simian',
    groupIcon: 'icon-beer',
    showSource: true,
    sections: [
    {
      id: "documentation",
      title: "Documentation",
      showSource: false,
      scripts: [
      'app/analytics',
      'app/enter',
      'app/footer',
      'app/home',
      'app/kienyke',
      'app/topbar',
      'app/app.js',
      'app/configuration.js'
      ],
    },
    ]
  }
  ],
  showDocularDocs: false,
  showAngularDocs: false
},

htmlangular: {
  options: {
    tmplext: 'tpl.html',
    customtags: [],
    customattrs: [
    'topbar',
    'footer'
    ],
    relaxerror: [],
    reportpath: null
  },
  files: {
    src: [
    '<%= config.app %>/**/*.html',
    '!<%= config.app %>/components/**/*.html'
    ],
  },
},

htmlmin: {
  dist: {
    options: {
      /*removeCommentsFromCDATA: true,
      // https://github.com/yeoman/grunt-usemin/issues/44
      //collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true*/
    },
    files: [{
      expand: true,
      cwd: '<%= config.app %>',
      src: [
      '**/*.html',
      '!**/components/**/*.html',
      ],
      dest: '<%= config.dist %>'
    }]
  }
},

imagemin: {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/assets/img',
      src: [
      '<%= config.app %>/images/*.{png,jpg,jpeg}'
      ],
      dest: '<%= config.dist %>/assets/img'
    }]
  }
},

// Jasmine: https://github.com/gruntjs/grunt-contrib-jasmine
jasmine: {
  src: 'app/**/*.js',
  options: {
    specs: 'spec/*Spec.js',
    vendor: [
    'app/components/angular/angular.js',
    'http://code.angularjs.org/1.1.0/angular-mocks.js'
    ]
  }
},

jshint: {
  options: {
    jshintrc: '.jshintrc',
    ignores: [
    '<%= config.app %>/components/**/*.js',
    'Gruntfile.js',
    '<%= config.app %>/topbar/modernizr.custom.25376.js',
    // This is temporal.
    'app/topbar/*.js',
    'app/vendor/*.js'
    ],
  },
  all: [
  'Gruntfile.js',
  '<%= config.app %>/**/*.js'
  ]
},

ngmin: {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.dist %>/scripts',
      src: '*.js',
      dest: '<%= config.dist %>/scripts'
    }]
  }
},

// Plato: https://github.com/jsoverson/grunt-plato
plato: {
  generate_reports: {
    files: {
      'reports': [
      '<%= config.app %>/**/*.js',
      '!<%= config.app %>/components/**/*.js',
      ]
    }
  },
},

rev: {
  options: {
    encoding: 'utf8',
    algorithm: 'md5',
    length: 8
  },
  files: {
    src: [
    'dist/scripts/*.js'
    ]
  }
},

uglify: {
  options: {
    mangle: false
  },
  dist: {
    files: {
      '<%= config.dist %>/scripts/scripts.js': [
      '<%= config.dist %>/scripts/scripts.js'
      ]
    }
  }
},

usemin: {
  html: [
  '<%= config.dist %>/**/*.html',
  '!<%= config.dist %>/components/**/*.html'
  ],
  css: [
  '<%= config.dist %>/**/*.css',
  '!<%= config.dist %>/components/**/*.css'
  ],
  options: {
    dirs: ['<%= config.dist %>']
  }
},

useminPrepare: {
  html: '<%= config.app %>/index.html',
  options: {
    dest: '<%= config.dist %>'
  }
},

watch: {
  compass: {
    files: [
    '<%= config.app %>/**/*.scss'
    ],
    tasks: ['compass:server']
  },
  livereload: {
    options: {
      livereload: LIVERELOAD_PORT
    },
    files: [
    '<%= config.app %>/**/*.html',
    '<%= config.app %>/**/*.css',
    '<%= config.app %>/**/*.js',
    '<%= config.app %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
},
});

grunt.registerTask('server', function(target) {
  if(target === 'dist') {
    return grunt.task.run(['build', 'connect:dist:keepalive']);
  }

  grunt.task.run([
    'concurrent:server',
    'connect:livereload',
    'browser_sync',
    'watch'
    ]);
});

grunt.registerTask('build', [
  'clean:dist',
  'docular',
  'jshint',
  //'htmlangular',
  'plato',
  'useminPrepare',
  'concurrent:dist',
  'concat',
  'copy',
  'ngmin',
  'cssmin',
  'uglify',
  'rev',
  'usemin'
  ]);

grunt.registerTask('validate', [
  'jshint',
  'htmlangular',
  //'jasmine'
  ]);

// Load the npm tasks.
grunt.loadNpmTasks('grunt-docular');
grunt.loadNpmTasks('grunt-contrib-jasmine');
};
