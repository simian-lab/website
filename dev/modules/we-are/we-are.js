'use strict';

angular.module('simian.we-are', [])

.controller('WeAreController', [
  '$scope','$state', '$timeout','MonkeysService','ProjectsService',
  '$location', '$translate', '$rootScope',
  function($scope, $state, $timeout, MonkeysService,
    ProjectsService, $location, $translate, $rootScope) {

    MonkeysService.getMonkeys().then(function(response) {
      $scope.monkeys = response.monkeys;

      for ($scope.i = 0; $scope.i<$scope.monkeys.length; $scope.i++) {

        if ($scope.monkeys[$scope.i].slug == $state.params.monkey) {
          $scope.position = $scope.i;
        }

      }
      var start = 0;
      var currentLanguage, currentSection, currentSubSection,
            newPath, pathParts, cposition;

      var cambio = function(cposition) {
        pathParts = $location.path().split('/');
        currentLanguage = pathParts[1];
        currentSection = pathParts[2];
        currentSubSection = pathParts[3];

        newPath = currentLanguage + '/' + currentSection + '/' +
        $scope.monkeys[cposition].slug + '/';
        console.log(newPath);
        $location.path(newPath);
        $location.replace();
        $rootScope.$apply();
      };



      $timeout(function() {
        /**
        * We are using a slider library called Swiper.
        * This is its API: http://idangero.us/swiper/api/#.V22dh5PhDOT
        */

        var projectsSlider = new Swiper('#monkeys-slider', {

          loop: false,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 1,
          spaceBetween: 10,
          initialSlide: $scope.position,
          runCallbacksOnInit : true,

          onSlideNextStart : function () {

            start = start + 1;
            if (start > 1  || $scope.position == 0) {
              $scope.position = $scope.position + 1;
              cambio($scope.position);
            }
          },

          onSlidePrevStart : function () {
            $scope.position = $scope.position - 1;
            cambio($scope.position);
          },
        });
      });
    });
  }
])
;
