'use strict';

angular.module('simian.projects', [])

.controller('ProjectsController', [
  '$scope',
  function($scope) {
    console.log('ProjectsController');
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
;
