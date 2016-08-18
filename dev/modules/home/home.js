'use strict';

angular.module('simian.home', [])

.controller('HomeController', [
  '$scope', '$timeout', 'MonkeysService', 'ProjectsService',
  function($scope, $timeout, MonkeysService, ProjectsService) {

    MonkeysService.getMonkeys().then(function(response) {
      $scope.bosses = [ response.monkeys[0], response.monkeys[1] ];

      $scope.simians = [];
      angular.forEach(response.monkeys, function(simian, key) {
        if (key > 1) {
          $scope.simians.push(simian);
        }
      });
    });

    $scope.numClientes = function() {
      if (screen.width < 480) {
        $scope.clients = 4;
        return $scope.clients;
      }
      else {
        $scope.clients = 12;
        return $scope.clients;
      }
    };

    ProjectsService.getProjects().then(function(response) {
      $scope.projects = response.projects;

      if (screen.width <= 720) {
        $scope.numslider = 1;
      }

      else {
        $scope.numslider = 3;
      }

      $timeout(function() {
        /**
        * We are using a slider library called Swiper.
        * This is its API: http://idangero.us/swiper/api/#.V22dh5PhDOT
        */
        var projectsSlider = new Swiper('#projects-slider', {
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: $scope.numslider,
          spaceBetween: 10
        });
      });
    });
  }
])
;
