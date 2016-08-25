'use strict';

angular.module('simian.project-deployment', [])

.controller('DeploymentController', [
  '$scope', 'ProjectsService', '$http', '$templateCache', '$sce', '$state',
  function($scope, ProjectsService, $http, $templateCache, $sce, $state) {
    console.log('DeploymentController');

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
      };

   ProjectsService.getProjects().then(function(response) {

      $scope.projects = response.projects;

      for (var count = 0; count<$scope.projects.length; count++) {
        if($scope.projects[count].slug == $state.params.project ) {
          var numproject = count;
        }
      }
      $scope.post = response.projects[numproject];
    });

  }
])
;
