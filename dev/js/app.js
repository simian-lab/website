angular.module('simian', [
  'ui.router',

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
  '$locationProvider', '$stateProvider', '$urlRouterProvider',
  function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

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
  '$scope',
  function($scope) {
    console.log('AppController');
  }
])
;

