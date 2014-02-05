'use strict';

angular.module('simian', ['ui.router'])

.config(function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/home/home.html'
  })
});
var translationsES = {
	HEADLINE: 'Esta es a prueba del nuevo Sitio de Simian ',
	PARAGRAPH: 'Un mono programador esta trabajando en esta cosa',
	VARIABLE_REPLACEMENT: 'Hola, {{name}}'
};
var translationsEN = {
	HEADLINE: 'This is a trial of the new Simian Site',
	PARAGRAPH: 'A monkey coder is working on this thing',
	VARIABLE_REPLACEMENT: 'Hi, {{name}}'
};
var app = angular.module('simian', ['pascalprecht.translate']);
app.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
});
app.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('es');
  $translateProvider.fallbackLanguage('es');;
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.uses(langKey);
    $translate()
  };
}]);
