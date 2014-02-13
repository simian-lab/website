'use strict';

angular.module('simian.topbar', [])

.controller('topbarController', function($stateProvider) {})

.directive('topbar', function() {
  return {
    templateUrl: '/topbar/topbar.html'
  }
})