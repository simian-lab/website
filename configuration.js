'use strict';

angular.module('simian.configuration', [])
   .run(function ($rootScope, $sce) {
      $rootScope.CONTACT_ROUTE= $sce.trustAsResourceUrl('http://myRoute:7544/contacts');
   });