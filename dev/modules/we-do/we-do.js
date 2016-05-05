'use strict';

angular.module('simian.we-do', [])

.controller('WeDoController', [
  '$scope',
  function($scope) {
    console.log('WeDoController');
  }
])

.config(function($translateProvider) {
    $translateProvider.translations('es', {
      WE_DO_TITLE: 'Qué hacemos'
    });
    $translateProvider.translations('en', {
      WE_DO_TITLE: 'We do'
    });
  }
)
;
