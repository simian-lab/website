'use strict';

angular.module('simian.footer', [])

.controller('FooterController', [
  '$scope', 'MonkeysService',
  function($scope, monkeys) {
    $scope.contact = { value : {}, isSend : false };
    console.log('monkeys', monkeys);
    $scope.submit = function () {
      if($scope.contact.$valid){
        $scope.contact.isSend = true;
        monkeys.contactMonkeys($scope.contact.value)
          .then(function (data) {
            $scope.contact = { value : {}, isSend : false };
          })
          .catch(function (err) {
            $scope.contact.isSend = false;
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
