'use strict';

angular.module('simian.projects', [])

.controller('ProjectsController', [
  '$scope',
  "ProjectsService",
  function($scope, ProjectsService) {
    console.log('ProjectsController');
    ProjectsService.getProjects().then(function(response){
      $scope.data = response.projects;
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

.factory('assembler', [ function () {
  var Assembler = function () {
    this.getElements = function (data, mode) {
      var content = '';
      var direc = '';

      console.log(data[0].type);

      for (var i = 0; i < data.length; i++) {
        if (data[i].type && (data[i].type == "desktop")) {
          direc = '<projects-desktop></projects-desktop>';
        }
        if (data[i].type && (data[i].type == "mobile")) {
          direc = '<projects-mobile></projects-mobile>';
        }
        if (data[i].type && (data[i].type == "ipad")) {
          direc = '<projects-ipad></projects-ipad>';
        }
        content = content + direc;
      }
      return content;
    };
  };
  return new Assembler();
}
])

.directive('rAssembler', [ 'assembler', '$compile',
  function (assembler,$compile) {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      mode: "@"
    },
    controller: 'ProjectsController',
    controllerAs: 'ctrl',
    template: '<span>{{data}}</span>',


    link: function (scope, element, attrs) {
      scope.$watch('data', function() {

        element.html(assembler.getElements(scope.data, scope.mode));
        $compile(element.contents())(scope);
      },true);
    }
  };
}
])

.directive('projectsMobile', [
  'ProjectsService',
  function(ProjectsService) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        limit: '='
      },
      templateUrl: '/modules/projects/projects-mobile.html',
      link: function($scope) {
        ProjectsService.getProjects().then(function(response) {
          $scope.projects = response.projects;
        });
      }
    }
  }
])

.directive('projectsIpad', [
  'ProjectsService',
  function(ProjectsService) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        limit: '='
      },
      templateUrl: '/modules/projects/projects-ipad.html',
      link: function($scope) {
        ProjectsService.getProjects().then(function(response) {
          $scope.projects = response.projects;
        });
      }
    }
  }
])

.directive('projectsDesktop', [
  'ProjectsService',
  function(ProjectsService) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        limit: '='
      },
      templateUrl: '/modules/projects/projects-desktop.html',
      link: function($scope) {
        ProjectsService.getProjects().then(function(response) {
          $scope.projects = response.projects;
        });
      }
    }
  }
])
;


