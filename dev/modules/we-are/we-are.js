'use strict';

angular.module('simian.we-are', [])

.controller('WeAreController', [
  '$scope','ProjectsService',
  function($scope, ProjectsService) {
    console.log('WeAreController');


   ProjectsService.getProjects().then(function(response) {
      $scope.projects = response.projects;

      console.log($scope.projects);

    });
  }
])
;
