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
    /*.state('projects', {
      controller: 'ProjectsController',
      templateUrl: '/modules/projects/projects.html',
      url: '/projects'
    })
    .state('clients', {
      controller: 'ClientsController',
      templateUrl: '/modules/clients/clients.html',
      url: '/clients'
    })
    .state('we-are', {
      controller: 'WeAreController',
      templateUrl: '/modules/we-are/we-are.html',
      url: '/we-are'
    })
    .state('location', {
      controller: 'LocationController',
      templateUrl: '/modules/location/location.html',
      url: '/location'
    })
    .state('we-share', {
      controller: 'WeShareController',
      templateUrl: '/modules/we-share/we-share.html',
      url: '/we-share'
    })
    .state('project-deployment', {
      controller: 'DeploymentController',
      templateUrl: '/modules/project-deployment/project-deployment.html',
      url: '/project-deployment'
    })
    .state('404', {
      templateUrl: '/modules/404/404.html',
      url: '/404'
    })*/
    ;

    $urlRouterProvider.otherwise('/404');
  }
])

.controller('AppController', [
  '$anchorScroll', '$location', '$rootScope', '$scope', 'TranslateService',
  function($anchorScroll, $location, $rootScope, $scope, TranslateService) {
    var loadedLanguage;

    loadedLanguage = $location.path().split('/')[1];
    if (loadedLanguage != 'en' && loadedLanguage != 'es') {
      loadedLanguage = 'es';
    }
    TranslateService.setLanguage(loadedLanguage);

    $rootScope.getLink = function(englishState, spanishState) {
      return TranslateService.getLink(englishState, spanishState);
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      // We scroll to the top of the page when we change the state.
      $anchorScroll();
      $rootScope.activeSection = toState.name;
    });
  }
])
;

