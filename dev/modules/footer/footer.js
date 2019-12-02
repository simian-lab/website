'use strict';

angular.module('simian.footer', [])

.controller('FooterController', [
  '$scope', 'MonkeysService', '$timeout',
  function($scope, monkeys, $timeout) {
    var TIME = 2 * 1000;
    $scope.year = (new Date()).getFullYear();

    $scope.submit = function () {
      if($scope.contact.$valid){
        $scope.clear();
        $scope.contact.$send = true;

        monkeys.contactMonkeys($scope.contact.value)
          .then(function (data) {
            $scope.contact.value = {};
            $scope.setClear = $timeout($scope.clear, TIME);
          })
          .catch(function (err) {
            $scope.setClear =  $timeout($scope.clear, TIME);
          });
      }
    };

    $scope.clear = function () {
      if($scope.setClear && $scope.setClear.cancel){
        $scope.setClear.cancel();
      }

      $scope.contact.$send = false;
    };
  }
])
.directive('simianFooter', function() {
  return {
    controller: 'FooterController',
    replace: true,
    restrict: 'E',
    templateUrl: '/modules/footer/footer.html'
  };
});
