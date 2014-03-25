'use strict';

angular.module('simian.footer', ['simian.configuration'])

.controller('footerController', function($scope, $http, AnalyticsTracker, $rootScope) {
  // TODO: something
  var CONTACT_ROUTE = $rootScope.CONTACT_ROUTE;
  $scope.sendForm = function(){
    AnalyticsTracker.eventTrack('button', 'click', 'contact button');
    $http.post(CONTACT_ROUTE,{
      Name: contact.name,
      Email: contact.email,
      Message: contact.message,
      captcha: contact.hidden
    }).success(function (data, status, headers, config) {
      // TODO
    }).error(function (data, status, headers, config) {
      // TODO
    });
  };
})

.directive('footer', function() {
  return {
    templateUrl: '/footer/footer.tpl.html'
  };
});
