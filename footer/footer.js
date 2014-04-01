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
    LOCATION_TITLE:       '¿Dónde estamos?',
    URGENT_LABEL:         'Telegrama urgente',
    SENDER_LABEL:         'Remitente',
    SENDING_LABEL:        'Enviando...'
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
    LOCATION_TITLE:       'Where are we?',
    URGENT_LABEL:         'Urgent telegram',
    SENDER_LABEL:         'Sender',
    SENDING_LABEL:        'Sending...'
  };

  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
})

.controller('footerController', function($rootScope, $scope, $http, AnalyticsTracker) {
  var CONTACT_ROUTE = $rootScope.CONTACT_ROUTE;
  $scope.hidden = '';
  $scope.formClass = 'footer';
  $scope.headline = 'CONTACT_HEADLINE';

  $scope.sendForm = function() {
    AnalyticsTracker.eventTrack('button', 'click', 'contact button');
    $scope.formClass += ' packaged';
    $scope.headline = 'SENDING_LABEL';

    $http.post(CONTACT_ROUTE, {
      Name: $scope.name,
      Email: $scope.email,
      Message: $scope.message,
      captcha: $scope.hidden
    }).success(function () {
      setTimeout(function() {
        $scope.formStatus = 'Message sent'; // TODO: Translate this!
        $scope.formClass += ' sent';
        $scope.$apply();
      }, 800);

    }).error(function () {
      $scope.formClass += ' error';
      $scope.formStatus = 'Couldn\'t send message'; // TODO: Translate this!

      setTimeout(function() {
        $scope.formStatus = '';
        $scope.formClass = 'footer';
        $scope.headline = 'CONTACT_HEADLINE';

        $scope.$apply();
      }, 5000);
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
