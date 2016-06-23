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

    ProjectsService.getProjects().then(function(response) {
      $scope.projects = response.projects;

      $timeout(function() {
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
