'use strict';

angular.module('simian.projects', [])

.controller('ProjectsController', [
  '$scope',
  "ProjectsService",
  function($scope, ProjectsService) {
    console.log('ProjectsController');
    ProjectsService.getProjects().then(function(response){
      $scope.projects = response.projects;
      console.log($scope.projects);
    });

  }
])

.config([
  '$translateProvider',
  function($translateProvider) {
    $translateProvider.translations('es', {
      PROJECTS_TITLE: 'Nuestros proyectos'
    });
    $translateProvider.translations('en', {
      PROJECTS_TITLE: 'Our projects'
    });
  }
])

.factory('ProjectsService', [
  '$http', '$q',
  function($http, $q) {
    return {
      getProjects: function() {
        var deferred;

        deferred = $q.defer();

        $http.get('json/projects.json').success(function(response) {
          deferred.resolve(response);
        });

        return deferred.promise;
      }
    }
  }
])
;
