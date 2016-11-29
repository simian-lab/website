'use strict';

angular.module('simian.header', [])

.config([ '$translateProvider', function($translateProvider) {
  $translateProvider.translations('en', {
    'HOME' : 'Home',
    'WE-DO': 'We do',
    'PROJECTS': 'Our projects',
    'CLIENTS': 'Who has been with us',
    'WE-ARE': 'Who are we',
    'LOCATION': 'Find us',
    'WE-SHARE': 'We share our knowledge'
  });

  $translateProvider.translations('es', {
    'HOME':'Inicio',
    'WE-DO': 'Qué hacemos',
    'PROJECTS': 'Nuestros proyectos',
    'CLIENTS': 'Quiénes han estado con nosotros',
    'WE-ARE': 'Quiénes somos',
    'LOCATION': 'Dónde encontrarnos',
    'WE-SHARE': 'Compartimos lo que sabemos'
  });
} ])

.controller('HeaderController', [
  '$scope', '$state', '$timeout', 'TranslateService',
  function($scope, $state, $timeout, TranslateService) {
    $scope.changeLanguage = function(language) {
      TranslateService.translateUrl(language);
    };

    $scope.myVar = true;
    $scope.youVar = false;
    $scope.toggle = function() {
      $scope.myVar = !$scope.myVar;
      $scope.youVar = !$scope.youVar;
    };
  }
])

.directive('simianHeader', function() {
  return {
    controller: 'HeaderController',
    replace: true,
    restrict: 'E',
    templateUrl: '/modules/header/header.html'
  };
})
;
