'use strict';

/**
 * @doc module
 * @name footer
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.footer', ['simian.configuration'])

.config(function($translateProvider){

  var translationsES = {
    CONTACT_HEADLINE:     'Contáctanos',
    NAME_LABEL:           'Nombre',
    EMAIL_LABEL:          'Correo electrónico',
    MESSAGE_LABEL:        'Mensaje',
    HIDDEN_LABEL:         '¡Si eres humano, deja esto vacío',
    NAME_PLACEHOLDER:     'Escribe tu nombre completo',
    EMAIL_PLACEHOLDER:    'No enviamos Spam',
    MESSAGE_PLACEHOLDER:  'Escribe tu mensaje :)',
    LOCATION_TITLE:       '¿Dónde estamos?'
  };

  var translationsEN = {
    CONTACT_HEADLINE:     'Contact Us',
    NAME_LABEL:           'Name',
    EMAIL_LABEL:          'Email',
    MESSAGE_LABEL:        'Message',
    HIDDEN_LABEL:         'If you\'re human, leave this blank',
    NAME_PLACEHOLDER:     'Write your full name',
    EMAIL_PLACEHOLDER:    'We don\'t spam!',
    MESSAGE_PLACEHOLDER:  'Write your message :)',
    LOCATION_TITLE:       'Where are we?'
  };

  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
})

.controller('footerController', function($rootScope, $scope, $http, AnalyticsTracker) {
  // TODO: something
  var CONTACT_ROUTE = $rootScope.CONTACT_ROUTE;
  $scope.sendForm = function(){
    AnalyticsTracker.eventTrack('button', 'click', 'contact button');
    $http.post(CONTACT_ROUTE,{
      Name: $scope.name,
      Email: $scope.email,
      Message: $scope.message,
      captcha: $scope.hidden
    }).success(function (data, status, headers, config) {
      alert('success!');
    }).error(function (data, status, headers, config) {
      alert('failure :(');
    });
  };
})

/**
 * @ngdoc directive
 * @name footer.directive:footer
 * @description This is the best directive ever!!
 */
.directive('footer', function() {
  return {
    templateUrl: '/footer/footer.tpl.html',
    replace: true
  };
});
