'use strict';

angular.module('simian.monkeys', [])

.config(['$httpProvider', function ($httpProvider) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}])
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
      },
      contactMonkeys: function(data) {
        data.captcha = 'bananas';
        return $http.post('https://script.google.com/macros/s/AKfycbyGKh6Gj-e1vKT01zEiSLtBuPthZEARhI8AycoVHQ15oWdFnQQ/exec', data);
      }
    };
  }
])
;
