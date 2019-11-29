angular.module('simian', [
  'ui.router',
  'pascalprecht.translate',

  'simian.config',
  'simian.translate',
  'simian.header',
  'simian.footer',
  'simian.home',
  'simian.we-do',
  'simian.projects',
  'simian.clients',
  'simian.we-are',
  'simian.location',
  'simian.we-share',
  'simian.monkeys',
  'simian.project-deployment'
])

.config([
  '$locationProvider', '$stateProvider', '$translateProvider', '$urlRouterProvider',
  function($locationProvider, $stateProvider, $translateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
    .state('home', {
      controller: 'HomeController',
      templateUrl: '/modules/home/home.html',
      url: '/:language/'
    })
    .state('we-do', {
      controller: 'WeDoController',
      templateUrl: '/modules/we-do/we-do.html',
      url: '/en/we-do/'
    })
    .state('que-hacemos', {
      controller: 'WeDoController',
      templateUrl: '/modules/we-do/we-do.html',
      url: '/es/que-hacemos/'
    })
    .state('projects', {
      controller: 'ProjectsController',
      templateUrl: '/modules/projects/projects.html',
      url: '/en/projects/'
    })
    .state('proyectos', {
      controller: 'ProjectsController',
      templateUrl: '/modules/projects/projects.html',
      url: '/es/proyectos/'
    })
    .state('clients', {
      controller: 'ClientsController',
      templateUrl: '/modules/clients/clients.html',
      url: '/en/clients/'
    })
    .state('clientes', {
      controller: 'ClientsController',
      templateUrl: '/modules/clients/clients.html',
      url: '/es/clientes/'
    })
    .state('we-are', {
      controller: 'WeAreController',
      templateUrl: '/modules/we-are/we-are.html',
      url: '/en/we-are/:monkey/'
    })
//    .state('quienes-somos', {
//      controller: 'WeAreController',
//      templateUrl: '/modules/we-are/we-are.html',
//      url: '/es/quienes-somos/:monkey/'
//    })
    .state('location', {
      controller: 'LocationController',
      templateUrl: '/modules/location/location.html',
      url: '/en/location/'
    })
    .state('ubicacion', {
      controller: 'LocationController',
      templateUrl: '/modules/location/location.html',
      url: '/es/ubicacion/'
    })
//    .state('we-share', {
//      controller: 'WeShareController',
//      templateUrl: '/modules/we-share/we-share.html',
//      url: '/en/we-share/'
//    })
//    .state('compartimos', {
//      controller: 'WeShareController',
//      templateUrl: '/modules/we-share/we-share.html',
//      url: '/es/compartimos/'
//    })
    .state('project-deployment', {
      controller: 'DeploymentController',
      templateUrl: '/modules/project-deployment/project-deployment.html',
      url: '/en/projects/:project'
    })

    .state('despliegue-proyecto', {
      controller: 'DeploymentController',
      templateUrl: '/modules/project-deployment/project-deployment.html',
      url: '/es/proyectos/:project/'
    })

    .state('404', {
      templateUrl: '/modules/404/404.html',
      url: '/404/'
    })
    ;

    //$urlRouterProvider.otherwise('/404');
  }
])

.controller('AppController', [
  '$anchorScroll', '$location', '$rootScope', '$scope','$state', '$translate', 'TranslateService',
  function($anchorScroll, $location, $rootScope, $scope, $state, $translate, TranslateService) {
    var loadedPath;

    $translate.preferredLanguage('es');

    loadedPath = $location.path();

    if (loadedPath == '/') {
      loadedPath = '/es/';
      $location.path(loadedPath);
    }

    TranslateService.setLanguage(loadedPath);

    $rootScope.getLink = function(englishState, spanishState, stateParams) {
      return TranslateService.getLink(englishState, spanishState, stateParams);
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      // We scroll to the top of the page when we change the state.
      $anchorScroll();
      $rootScope.activeSection = toState.name;
    });
  }
])
;

