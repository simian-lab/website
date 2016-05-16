'use strict';

angular.module('simian.home', [])

.controller('HomeController', [
  '$scope', 'MonkeysService',
  function($scope, MonkeysService) {

    MonkeysService.getMonkeys().then(function(response) {
      $scope.bosses = [ response.monkeys[0], response.monkeys[1] ];

      $scope.simians = [];
      angular.forEach(response.monkeys, function(simian, key) {
        if (key > 1) {
          $scope.simians.push(simian);
        }
      });
    });
  }
])
;
