'use strict';

angular.module('simian.we-are', [])

.controller('WeAreController', [
  '$scope','$timeout','MonkeysService','ProjectsService',
  function($scope, $timeout, MonkeysService, ProjectsService) {
    console.log('WeAreController');

  MonkeysService.getMonkeys().then(function(response) {
      $scope.monkeys = response.monkeys;

      console.log($scope.monkeys);
    });

    MonkeysService.getMonkeys().then(function(response) {
      $scope.monkeys = response.monkeys;

      console.log($scope.monkeys);

      $timeout(function() {
        /**
        * We are using a slider library called Swiper.
        * This is its API: http://idangero.us/swiper/api/#.V22dh5PhDOT
        */
        var projectsSlider = new Swiper('#projects-slider', {
          loop: true,
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
