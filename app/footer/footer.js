'use strict';

/**
 * @doc module
 * @name footer
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.footer', ['simian.configuration'])

.controller('footerController', function($scope, AnalyticsTracker) {
  // TODO: something
  $scope.event = function() {
    AnalyticsTracker.eventTracker('button', 'click', 'contact button');
  };
})

/**
 * @ngdoc directive
 * @name footer.directive:footer
 * @description This is the best directive ever!!
 */
.directive('footer', function() {
  return {
    templateUrl: '/footer/footer.tpl.html'
  };
});
