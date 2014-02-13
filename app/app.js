'use strict';

angular.module('simian', [
  'ui.router',
  'pascalprecht.translate',
  'simian.home',
  'simian.topbar'
  ])

.config(function($stateProvider, $locationProvider, $translateProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/home/home.html'
  })
  .state('enter', {
    url: '/enter',
    templateUrl: '/enter/enter.html'
  })
  .state('kienyke', {
    url: '/kienyke',
    templateUrl: '/kienyke/kienyke.html'
  });
})

.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.uses(langKey);
    $translate();
  };
}]);
