'use strict';

angular.module('simian.translate', [])

.factory('TranslateService', [
  '$location', '$rootScope', '$state',
  '$translate', 'ROUTES_ENES', 'ROUTES_ESEN',
  function($location, $rootScope, $state,
    $translate, ROUTES_ENES, ROUTES_ESEN) {
    return {
      getLink: function(englishState, spanishState, subSection) {
        if ($rootScope.language === 'en') {
          return $state.href(englishState, subSection);
        }
        else if ($rootScope.language === 'es') {
          return $state.href(spanishState, subSection);
        }
      },
      setLanguage: function(loadedPath) {
        var language, pathParts, section;

        pathParts = loadedPath.split('/');

        language = pathParts[1];

        if (language != undefined) {
          $translate.use(language);
          $rootScope.language = language;
        }
      },
      translateUrl: function(language) {
        var currentLanguage, currentSection, currentSubSection,
        newPath, pathParts;

        pathParts = $location.path().split('/');
        currentLanguage = pathParts[1];
        currentSection = pathParts[2];
        currentSubSection = pathParts[3];

        if (currentLanguage != language) {

          if (currentSection === '') {
            newPath = '/' + language + '/';
          }
          else {
            if (language === 'en') {
              newPath = '/en/' + ROUTES_ESEN[currentSection] + '/';
            }
            else if (language === 'es') {
              newPath = '/es/' + ROUTES_ENES[currentSection] + '/';
            }

            if (currentSubSection != '') {
              newPath = newPath + currentSubSection + '/';
            }
          }

          $location.path(newPath);
          this.setLanguage(newPath);
        }
      }
    }
  }
])
;
