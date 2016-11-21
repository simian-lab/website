'use strict';

angular.module('simian.monkeys', [])

.factory('MonkeysService', [
  '$http', '$q',
  function($http, $q) {
    return {
      getMonkeys: function() {
        var deferred;

        deferred = $q.defer();

        $http.get('json/monkeys.json').success(function(response) {
          deferred.resolve(response);
        });

        return deferred.promise;
      }
    };
  }
])
;
