'use strict';

angular.module('simian', [
  'ui.router',
  'pascalprecht.translate',
  'simian.footer',
  'simian.home',
  'simian.kienyke',
  'simian.enter',
  'simian.topbar',
  'simian.configuration',
  'simian.tracker'
])

.config(function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/home/home.tpl.html'
  })
  .state('enter', {
    url: '/enter/',
    templateUrl: '/enter/enter.tpl.html'
  })
  .state('kienyke', {
    url: '/kienyke/',
    templateUrl: '/kienyke/kienyke.tpl.html'
  });
})

.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.uses(langKey);
    $translate();
  };
}]);
