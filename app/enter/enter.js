'use strict';

/**
 * @doc module
 * @name enter
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.enter', [])

.controller('EnterController', function($location, AnalyticsTracker) {
  AnalyticsTracker.pageTrack($location.url());
});