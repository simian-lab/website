angular.module('simian', [
  'ui.router',

  'simian.header',
  'simian.footer'
])

.config([
  '$locationProvider', '$stateProvider', '$urlRouterProvider',
  function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
    .state('home', {
      templateUrl: '/modules/home/home.html',
      url: '/'
    })
  }
])

.controller('AppController', [
  '$scope',
  function($scope) {
    console.log('AppController');
  }
])
;

