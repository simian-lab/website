'use strict';

angular.module('simian.we-are', [])

.controller('WeAreController', [
  '$scope','$state', '$timeout','MonkeysService','ProjectsService',
  '$location', '$translate', '$rootScope',
  function($scope, $state, $timeout, MonkeysService,
    ProjectsService, $location, $translate, $rootScope) {

    MonkeysService.getMonkeys().then(function(response) {
      $scope.monkeys = response.monkeys;

      for ($scope.i = 0; $scope.i<$scope.monkeys.length; $scope.i++) {

        if ($scope.monkeys[$scope.i].slug == $state.params.monkey) {
          $scope.position = $scope.i;
        }

      }
      var start = 0;
      var currentLanguage, currentSection, currentSubSection,
            newPath, pathParts, cposition;

      var cambio = function(cposition) {
        pathParts = $location.path().split('/');
        currentLanguage = pathParts[1];
        currentSection = pathParts[2];
        currentSubSection = pathParts[3];

        newPath = currentLanguage + '/' + currentSection + '/' +
        $scope.monkeys[cposition].slug + '/';
        console.log(newPath);
        $location.path(newPath);
        $location.replace();
        $rootScope.$apply();
      };
    });
  }
])
;
