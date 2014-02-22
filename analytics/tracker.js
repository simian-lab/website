'use strict';

angular.module('simian.tracker', ['simian.configuration'])
.factory('AnalyticsTracker',function($rootScope,$window) {
  return {
    initGATracker: function(){
      var domainId;
      switch($rootScope.ENVIRONMENT){
        case 'simian':
          domainId ='UA-48202840-1';
          break;
        case 'dev':
          domainId ='UA-48202840-2';
          break;
        case 'alpha':
          domainId ='UA-48202840-3';
          break;
        case 'beta':
          domainId ='UA-48202840-4';
          break;
      }
      $window.ga('create', domainId, 'simian.co');
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