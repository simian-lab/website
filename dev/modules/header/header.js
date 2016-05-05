'use strict';

angular.module('simian.header', [])

.controller('HeaderController', [
  '$scope', '$state', '$timeout', '$translate',
  function($scope, $state, $timeout, $translate) {

    $timeout(function() {
      $scope.activeSection = $state.current.name;
    });

    $scope.changeState = function(state) {
      $scope.activeSection = state;
      $state.go(state);
    }

    $scope.changeLanguage = function(language) {
      $translate.use(language);
    }
  }
])

.directive('simianHeader', function() {
  return {
    controller: 'HeaderController',
    replace: true,
    restrict: 'E',
    templateUrl: '/modules/header/header.html'
  }
})
;
