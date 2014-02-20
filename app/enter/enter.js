'use strict';

angular.module('simian.enter', [])

.controller('EnterController', function($location, AnalyticsTracker) {
  AnalyticsTracker.pageTrack($location.url());
});