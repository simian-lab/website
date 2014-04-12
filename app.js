'use strict';

/**
 * @doc module
 * @name app
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian', [
  'ui.router',
  'pascalprecht.translate',
  'smoothScroll',
  'simian.footer',
  'simian.home',
  'simian.kienyke',
  'simian.enter',
  'simian.topbar',
  'simian.configuration',
  'simian.tracker'
])

.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  // Make sure all routes work with and without trailing slash
  $urlRouterProvider.rule(function($injector, $location) {
    var path = $location.path(),
      // Note: misnomer. This returns a query object, not a search string
      search = $location.search(),
      params;

    // check to see if the path already ends in '/'
    if (path[path.length - 1] === '/') {
      return;
    }

    // If there was no search string / query params, return with a `/`
    if (Object.keys(search).length === 0) {
      return path + '/';
    }

    // Otherwise build the search string and return a `/?` prefix
    params = [];
    angular.forEach(search, function(v, k){
      params.push(k + '=' + v);
    });
    return path + '/?' + params.join('&');
  });

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/home/home.tpl.html',
    controller: 'HomeController'
  })
  .state('enter', {
    url: '/enter/',
    templateUrl: '/enter/enter.tpl.html',
    controller: 'EnterController'
  })
  .state('kienyke', {
    url: '/kienyke/',
    templateUrl: '/kienyke/kienyke.tpl.html',
    controller: 'KienykeController'
  });
})

.controller('Ctrl', ['$translate', '$scope','AnalyticsTracker', function ($translate, $scope, AnalyticsTracker) {
  AnalyticsTracker.initGATracker();
  $scope.changeLanguage = function (langKey) {
    $translate.uses(langKey);
    $translate();
  };
}]);
