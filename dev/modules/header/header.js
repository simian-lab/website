'use strict';

angular.module('simian.header', [])

.controller('HeaderController', [
  '$scope', '$state', '$timeout', 'TranslateService',
  function($scope, $state, $timeout, TranslateService) {
    $scope.changeLanguage = function(language) {
      TranslateService.setLanguage(language);
    }
  }
])

.directive('simianHeader', function() {
  return {
    controller: 'HeaderController',
    replace: true,
    restrict: 'E',
    templateUrl: '/modules/header/header.html'
  }
})
;
