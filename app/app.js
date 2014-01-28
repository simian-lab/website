'use strict';

angular.module('simian', ['ui.router'])

.config(function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/home/home.html'
  })
})
