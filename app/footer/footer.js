'use strict';

angular.module('simian.footer', ['simian.configuration'])

.controller('footerController', function($scope, AnalyticsTracker) {
  // TODO: something
  $scope.event = function() {
    AnalyticsTracker.eventTracker('button', 'click', 'contact button');
  };
})

.directive('footer', function() {
  return {
    templateUrl: '/footer/footer.tpl.html'
  };
});
