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
  $rootScope.CONTACT_ROUTE = $sce.trustAsResourceUrl('@@contact_form_route');
  $rootScope.ANALYTICS_ID = '@@google_analytics_id';
  $rootScope.ENVIRONMENT = '@@env';
});
