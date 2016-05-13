angular.module('simian', [
  'ui.router',
  'pascalprecht.translate',

  'simian.header',
  'simian.footer',
  'simian.home',
  'simian.we-do',
  'simian.projects',
  'simian.clients',
  'simian.we-are',
  'simian.location',
  'simian.we-share'
])

.config([
  '$locationProvider', '$stateProvider', '$translateProvider', '$urlRouterProvider',
  function($locationProvider, $stateProvider, $translateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $translateProvider.preferredLanguage('es');

    $stateProvider
    .state('home', {
      controller: 'HomeController',
      templateUrl: '/modules/home/home.html',
      url: '/'
    })
    .state('we-do', {
      controller: 'WeDoController',
      templateUrl: '/modules/we-do/we-do.html',
      url: '/we-do'
    })
    .state('projects', {
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
    });
  }
])

.controller('AppController', [
  '$rootScope', '$scope',
  function($rootScope, $scope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.activeSection = toState.name;
    });
  }
])
;

