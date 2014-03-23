'use strict';

/**
 * @doc module
 * @name home
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.home', [])

.config(function($translateProvider){

  var translationsES = {/* TODO: REDO THIS! */};

  var translationsEN = {
    MAIN_HEADLINE:          'We build technology for human beings',
    ENVISION_HEADLINE:      'Envision',
    ENVISION_PARAGRAPH:     'Successful products are born from clear objectives.' +
                            'We can help you shaping your ideas, just define the goals' +
                            'and we\'ll show you how to get there.',
    ANALYSIS_HEADLINE:      'Analysis',
    ANALYSIS_PARAGRAPH:     'Without measurement, there\'s no way to tell if you\'re' +
                            'pointing in the right direction. Through stats and analysis' +
                            'we can help you understand your customers.',
    DESIGN_HEADLINE:        'Design',
    DESIGN_PARAGRAPH:       'We don\'t just make pretty things; we craft products that' +
                            'are useful and achieve your goals. Instead of drawing plain images,' +
                            'we design dynamic user experiences right in the browser.',
    DEVELOPMENT_HEADLINE:   'Development',
    DEVELOPMENT_PARAGRAPH:  'We understand how the Internet works, from network' +
                            'infrastructure up to browser quirks. We use the latest technologies' +
                            'to build your project, whether it\'s a small site or a high traffic product.',
    MAINTENANCE_HEADLINE:   'Maintenance',
    MAINTENANCE_PARAGRAPH:  'We grow alongside our customers. We like to innovate constantly with' +
                            'your products as your goals and customers evolve in time.'

  };

  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
})

.controller('HomeController', function($location, AnalyticsTracker) {
  AnalyticsTracker.pageTrack($location.url());
});
