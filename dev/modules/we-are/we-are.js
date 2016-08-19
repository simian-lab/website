'use strict';

angular.module('simian.we-are', [])

.controller('WeAreController', [
  '$scope','$state', '$timeout','MonkeysService','ProjectsService',
  function($scope, $state, $timeout, MonkeysService, ProjectsService) {
    MonkeysService.getMonkeys().then(function(response) {
      $scope.monkeys = response.monkeys;
      $scope.show = true;

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
          spaceBetween: 10
        });
      });
    });
  }
])
;
