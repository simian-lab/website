'use strict';

angular.module('simian.tracker', ['simian.configuration'])
  .factory('AnalyticsTracker',function($rootScope, $window, $location, $routeParams) {
    return {
      trackGAPageview: function(path){
        ga('send', 'pageview', path);
      }
    }    
  })
  .value('trackID'{
  	load: function($rootScope){
  		switch{
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
  })
  .run(  	
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', this.trackID, 'simian.co');
    ga('send', 'pageview');
  );
