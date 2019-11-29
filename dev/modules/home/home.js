'use strict';

angular.module('simian.home', [])

.controller('HomeController', [
  '$scope', '$stateParams','$timeout', 'MonkeysService',
  'ProjectsService', 'TranslateService',
  function($scope, $stateParams, $timeout, MonkeysService,
  ProjectsService, TranslateService) {
    $scope.numslider = 3;

    TranslateService.setLanguage($stateParams.language);

    MonkeysService.getMonkeys().then(function(response) {
      $scope.bosses = [ response.monkeys[0], response.monkeys[1] ];

      $scope.simians = [];
      angular.forEach(response.monkeys, function(simian, key) {
        if (key > 1) {
          $scope.simians.push(simian);
        }
      });
    });

    $scope.numClientes = function() {
      if (screen.width < 480) {
        $scope.clients = 4;
        return $scope.clients;
      }
      else {
        $scope.clients = 12;
        return $scope.clients;
      }
    };

    ProjectsService.getProjects().then(function(response) {
      if (screen.width <= 320) {
        $scope.numslider = 1;
      }

      $scope.projects = response.projects.filter(function (e, i) {
        return i < $scope.numslider;
      });
    });
  }
])
;
