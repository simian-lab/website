'use strict';

angular.module('simian.translate', [])

.factory('TranslateService', [
  '$location', '$rootScope', '$state', '$translate', 'ROUTES_ENES', 'ROUTES_ESEN',
  function($location, $rootScope, $state, $translate, ROUTES_ENES, ROUTES_ESEN) {
    return {
      setLanguage: function(language) {
        var previousState;

        if (language != $translate.use()) {
          $translate.use(language);
          $rootScope.language = language;
          console.log('Language: ' + language);

          previousState = $location.path().split('/')[2];

          if (previousState !== undefined && previousState !== '') {
            if (language === 'es') {
              $location.path('/es/' + ROUTES_ENES[previousState] + '/');
            }
            else if (language === 'en') {
              $location.path('/en/' + ROUTES_ESEN[previousState] + '/');
            }
          }
          else {
            $location.path('/' + language + '/');
          }
        }
      },
      getLink: function(englishState, spanishState) {
        if ($rootScope.language === 'en') {
          return $state.href(englishState);
        }
        else if ($rootScope.language === 'es') {
          return $state.href(spanishState);
        }
      }
    }
  }
])
;
