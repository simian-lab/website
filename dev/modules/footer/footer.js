'use strict';

angular.module('simian.footer', [])

.controller('FooterController', [
  '$scope', 'MonkeysService',
  function($scope, monkeys) {
    $scope.year = (new Date()).getFullYear();
    $scope.submit = function () {
      if($scope.contact.$valid){
        $scope.contact.$send = true;
        monkeys.contactMonkeys($scope.contact.value)
          .then(function (data) {
            $scope.contact.value = {};
            $scope.contact.$send = false;
          })
          .catch(function (err) {
            $scope.contact.$send = false;
          });
      }
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
