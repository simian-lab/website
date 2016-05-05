'use strict';

angular.module('simian.header', [])

.controller('HeaderController', [
  '$scope',
  function($scope) {
    console.log('HeaderController');
  }
])

.directive('simianHeader', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: '/modules/header/header.html'
  }
})
;
