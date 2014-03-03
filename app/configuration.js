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
    $rootScope.CONTACT_ROUTE= $sce.trustAsResourceUrl('http://localhost:7544/contacts');
    $rootScope.ENVIRONMENT= 'dev'; //Avaivable env: simian, dev, alpha, beta
  });