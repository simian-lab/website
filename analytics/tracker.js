'use strict';

angular.module('simian.tracker', ['simian.configuration'])
  .factory('AnalyticsTracker',function($rootScope,$window) {
    return {
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
  })
  .value('trackID', {
    load: function($rootScope){
      switch($rootScope.ENVIRONMENT){
        case 'simian':
          this.trackID ='UA-48202840-1';
          break;
        case 'dev':
          this.trackID ='UA-48202840-2';
          break;
        case 'alpha':
          this.trackID ='UA-48202840-3';
          break;
        case 'beta':
          this.trackID ='UA-48202840-4';
          break;
      }
    }
  });