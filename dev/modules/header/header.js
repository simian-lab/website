'use strict';

angular.module('simian.header', [])

.config([ '$translateProvider', function($translateProvider) {
  $translateProvider.translations('en', {
    'HOME' : 'Home',
    'WE-DO': 'We do',
    'PROJECTS': 'Portfolio',
    'CLIENTS': 'Clients',
    'WE-ARE': 'Who are we',
    'LOCATION': 'Find us',
    'WE-SHARE': 'We share our knowledge'
  });

  $translateProvider.translations('es', {
    'HOME':'Inicio',
    'WE-DO': 'Qué hacemos',
    'PROJECTS': 'Portafolio',
    'CLIENTS': 'Clientes',
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

    $scope.toggles = true;
    $scope.toggle = function() {
      $scope.toggles = !$scope.toggles;
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
