'use strict';

/**
 * @doc module
 * @name configuration
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.configuration', [])

.run(function ($rootScope, $sce) {
  $rootScope.CONTACT_ROUTE = $sce.trustAsResourceUrl('http://localhost:5000/contact');
  $rootScope.ANALYTICS_ID = 'UA-48202840-2';
  $rootScope.ENVIRONMENT = 'local';
});
