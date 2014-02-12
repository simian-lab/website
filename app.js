'use strict';

angular.module('simian', ['ui.router', 'pascalprecht.translate'])

.config(function($stateProvider, $locationProvider, $translateProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/home/home.html'
  })
  .state('enter', {
    url: '/enter',
    templateUrl: '/enter/enter.html'
  })
  .state('kienyke', {
    url: '/kienyke',
    templateUrl: '/kienyke/kienyke.html'
  });


  var translationsES = {
    HEADLINE_MAIN: 'Construimos tecnología para seres humanos',
    PARAGRAPH: 'Normally, both your asses would be dead as fucking fried chicken,' +
    ' but you happen to pull this shit while Im in a transitional period so I dont' +
    ' wanna kill you, I wanna help you. But I cant give you this case, it dont' +
    ' belong to me. Besides, Ive already been through too much shit this morning' +
    ' over this case to hand it over to your dumb ass.',
    VARIABLE_REPLACEMENT: 'Hola, {{name}}',
    HEADLINE_ONE: 'Visión',
    HEADLINE_TWO: 'Análisis',
    HEADLINE_THREE: 'Desarrollo',
    HEADLINE_FOUR: 'Mantenimiento',
    HEADLINE_FIVE: 'Trabajo Reciente',
    HEADLINE_SIX: 'Nuestros clientes dicen',
    HEADLINE_SEVEN: 'Nuestro proceso',
    HEADLINE_EIGHT: 'El equipo'
  };
  var translationsEN = {
    HEADLINE_MAIN: 'We build tecnology for human beings',
    PARAGRAPH: 'Normally, both your asses would be dead as fucking fried chicken,'
    + ' but you happen to pull this shit while Im in a transitional period so I dont'
    + ' wanna kill you, I wanna help you. But I cant give you this case, it dont'
    + ' belong to me. Besides, Ive already been through too much shit this morning'
    + ' over this case to hand it over to your dumb ass.',
    VARIABLE_REPLACEMENT: 'Hi, {{name}}',
    HEADLINE_ONE: 'Vision',
    HEADLINE_TWO: 'Analysis',
    HEADLINE_THREE: 'Development',
    HEADLINE_FOUR: 'Maintenance',
    HEADLINE_FIVE: 'Recent Work',
    HEADLINE_SIX: 'Our Clients Say',
    HEADLINE_SEVEN: 'Our Process',
    HEADLINE_EIGHT: 'The Team'
  };

  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
})

// Do we need to move this directive to another place?
.directive('topbar', function() {
  return {
    templateUrl: '/topbar/topbar.html'
  };
})
.directive('footer', function(){
  return {
    templateUrl: '/footer/footer.html'
  }
})
.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.uses(langKey);
    $translate();
  };
}]);
