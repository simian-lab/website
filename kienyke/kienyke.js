'use strict';

/**
 * @doc module
 * @name kienyke
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.kienyke',[])

  .controller('KienykeController', function($location, AnalyticsTracker) {
  AnalyticsTracker.pageTrack($location.url());
});