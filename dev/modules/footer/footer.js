'use strict';

angular.module('simian.footer', [])

.controller('FooterController', [
  '$scope',
  function($scope) {
    console.log('FooterController');
  }
])

.directive('simianFooter', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: '/modules/footer/footer.html'
  }
})
;
