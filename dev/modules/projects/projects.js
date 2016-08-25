'use strict';

angular.module('simian.projects', [])

.controller('ProjectsController', [
  '$scope',
  "ProjectsService", '$http', '$templateCache', '$sce',
  function($scope, ProjectsService, $http, $templateCache, $sce) {

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
      };

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

      if (data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].type && (data[i].type == "desktop")) {
            direc = '<projects-desktop project="data[' + i + ' ]"></projects-desktop>';
          }
          if (data[i].type && (data[i].type == "mobile")) {
            direc = '<projects-mobile project="data[' + i + ']"></projects-mobile>';
          }
          if (data[i].type && (data[i].type == "ipad")) {
            direc = '<projects-ipad project="data[' + i + ']"></projects-ipad>';
          }
          content = content + direc;
        }
        return content;
      }
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

.directive('projectsDesktop', [
  'ProjectsService',
  function(ProjectsService) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        project: '='
      },
      controller: 'ProjectsController',
      controllerAs: 'ctrl',
      templateUrl: '/modules/projects/projects-desktop.html',
      link: function(scope, element, attrs, $scope) {
        scope.$watch('project', function() {
          $scope.project = scope.project;
        });
      }
    }
  }
])

.directive('projectsMobile', [
  'ProjectsService',
  function(ProjectsService) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        project: '='
      },
      controller: 'ProjectsController',
      controllerAs: 'ctrl',
      templateUrl: '/modules/projects/projects-mobile.html',
      link: function(scope, element, attrs, $scope) {
        scope.$watch('project', function() {
          $scope.project = scope.project;
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
        project: '='
      },
      controller: 'ProjectsController',
      controllerAs: 'ctrl',
      templateUrl: '/modules/projects/projects-ipad.html',
      link: function(scope, element, attrs, $scope) {
        scope.$watch('project', function() {
          $scope.project = scope.project;
        });
      }
    }
  }
])
;


