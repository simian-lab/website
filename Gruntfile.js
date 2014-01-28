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
    browser_sync: {
      options: {
        watchTask: true
      },
      bsFiles: {
        src: 'styles/*.css'
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
    useminPrepare: {
      html: '<%= config.app %>/index.html',
      options: {
        dest: '<%= config.dist %>'
      }
    },
    usemin: {
      html: ['<%= config.dist %>/**/*.html'],
      css: ['<%= config.dist %>/**/*.css'],
      options: {
        dirs: ['<%= config.dist %>']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: [
          '<%= config.app %>/components/**/*.js'
        ],
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/**/*.js'
      ]
    },
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist'
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
    }
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
    'useminPrepare',
    'concurrent:dist',
    'ngmin',
    'usemin'
  ]);
};
