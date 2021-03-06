'use strict';

/**
 * @doc module
 * @name tracker
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.tracker', ['simian.configuration'])

.factory('AnalyticsTracker',function($rootScope,$window) {
  return {
    initGATracker: function(){
      var domainId = $rootScope.ANALYTICS_ID;

      $window.ga('create', domainId, {
        'cookieDomain': 'none'
      });
    },
    trackGAPageview: function(path){
      $window.ga('send', 'pageview', path);
    },
    trackGAEvent: function(category, action, label){
      $window.ga('send', 'event', category, action, label);
    },
    pageTrack: function(path) {
      // We set this in a timeout so we know for sure the DOM
      // has been updated with the correct meta-shtick
      var self = this;

      setTimeout(function() {
        self.trackGAPageview(path);
      }, 10);
    },

    eventTrack: function(category, action, label) {
      this.trackGAEvent(category, action, label);
    }
  };
});
