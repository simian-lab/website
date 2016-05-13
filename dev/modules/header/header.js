'use strict';

angular.module('simian.header', [])

.controller('HeaderController', [
  '$scope', '$state', '$timeout', '$translate',
  function($scope, $state, $timeout, $translate) {

    $scope.changeLanguage = function(language) {
      $translate.use(language);
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
