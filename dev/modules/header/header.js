'use strict';

angular.module('simian.header', [])

.controller('HeaderController', [
  '$scope', '$state', '$timeout',
  function($scope, $state, $timeout) {

    $timeout(function() {
      $scope.activeSection = $state.current.name;
    });

    $scope.changeState = function(state) {
      $scope.activeSection = state;
      $state.go(state);
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
