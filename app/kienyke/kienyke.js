'use strict';

angular.module('simian.kienyke',[])
  .controller('KienykeController', function($location, AnalyticsTracker) {
  AnalyticsTracker.pageTrack($location.url());
});