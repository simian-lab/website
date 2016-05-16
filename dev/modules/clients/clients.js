'use strict';

angular.module('simian.clients', [])

.controller('ClientsController', [
  '$scope',
  function($scope) {}
])

.factory('ClientsService', [
  '$http', '$q',
  function($http, $q) {
    return {
      getClients: function() {
        var deferred;

        deferred = $q.defer();

        $http.get('json/clients.json').success(function(response) {
          deferred.resolve(response);
        });

        return deferred.promise;
      }
    }
  }
])

.directive('simianClients', [
  'ClientsService',
  function(ClientsService) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        limit: '='
      },
      templateUrl: '/modules/clients/clients-grid.html',
      link: function($scope) {
        ClientsService.getClients().then(function(response) {
          $scope.clients = response.clients;
        });
      }
    }
  }
])
;
