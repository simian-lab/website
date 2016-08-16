'use strict';

angular.module('simian.home', [])

.controller('HomeController', [
  '$scope', '$stateParams','$timeout', 'MonkeysService',
  'ProjectsService', 'TranslateService',
  function($scope, $stateParams, $timeout, MonkeysService,
  ProjectsService, TranslateService) {

    TranslateService.setLanguage($stateParams.language);

    MonkeysService.getMonkeys().then(function(response) {
      $scope.bosses = [ response.monkeys[0], response.monkeys[1] ];

      $scope.simians = [];
      angular.forEach(response.monkeys, function(simian, key) {
        if (key > 1) {
          $scope.simians.push(simian);
        }
      });
    });

    ProjectsService.getProjects().then(function(response) {
      $scope.projects = response.projects;

      $timeout(function() {
        /**
        * We are using a slider library called Swiper.
        * This is its API: http://idangero.us/swiper/api/#.V22dh5PhDOT
        */
        var projectsSlider = new Swiper('#projects-slider', {
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 3,
          spaceBetween: 10
        });
      })
    })
  }
])
;
