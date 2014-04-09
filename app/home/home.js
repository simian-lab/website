'use strict';

/**
 * @doc module
 * @name home
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.home', [])

.config(function($translateProvider){

  var translationsES = {
    MAIN_HEADLINE:          'Construimos tecnología para seres humanos',
    CONTACT_LABEL:          'Contáctanos',
    WHAT_WE_DO_HEADLINE:    '¿Que hacemos?',
    ENVISION_HEADLINE:      'Ideación',
    ENVISION_PARAGRAPH:     'Un producto exitoso empieza con un objetivo claro. ' +
                            'Te ayudamos a darle forma a tus ideas, tú defines las ' +
                            'metas y nosotros te mostramos cómo alcanzarlas.',
    ANALYSIS_HEADLINE:      'Análisis',
    ANALYSIS_PARAGRAPH:     'Sin la medición apropiada no puedes saber si estás ' +
                            'apuntando en la dirección correcta. A través de ' +
                            'estadísticas y análisis te podemos ayudar a entender ' +
                            'cómo interactúan tus clientes con tu producto.',
    DESIGN_HEADLINE:        'Diseño',
    DESIGN_PARAGRAPH:       'No sólo hacemos cosas bonitas; creamos productos ' +
                            'que son útiles y que cumplen tus objetivos. En vez de ' +
                            'dibujar imágenes estáticas, diseñamos experiencias de ' +
                            'usuario directamente en el navegador.',
    DEVELOPMENT_HEADLINE:   'Desarrollo',
    DEVELOPMENT_PARAGRAPH:  'Entendemos como funciona Internet, desde la infraestructura ' +
                            'de red hasta las peculiaridades de los navegadores. Usamos ' +
                            'las últimas tecnologías para construir tu proyecto, bien sea ' +
                            'un sitio pequeño o un producto de alto tráfico.',
    MAINTENANCE_HEADLINE:   'Mantenimiento',
    MAINTENANCE_PARAGRAPH:  'Crecemos al lado de nuestros clientes. Nos gusta innovar ' +
                            'constantemente con tus productos a medida que tus objetivos ' +
                            'y tus clientes evolucionan.',
    WORK_HEADLINE:          'Trabajo reciente',
    ENTER_LINK:             'ENTER.CO, una web-app responsive',
    KYK_LINK:               'KIENYKE, un sitio mobile-first',
    CLIENTS_HEADLINE:       'Lo que dicen nuestros clientes',
    PROCESS_HEADLINE:       'Nuestro proceso',
    TEAM_HEADLINE:          'Equipo'

  };

  var translationsEN = {
    MAIN_HEADLINE:          'We build technology for human beings',
    CONTACT_LABEL:          'Contact Us',
    WHAT_WE_DO_HEADLINE:    'What we do',
    ENVISION_HEADLINE:      'Envision',
    ENVISION_PARAGRAPH:     'Successful products are born from clear objectives. ' +
                            'We can help you shape your ideas, just define the goals ' +
                            'and we\'ll show you how to get there.',
    ANALYSIS_HEADLINE:      'Analysis',
    ANALYSIS_PARAGRAPH:     'Without measurement, there\'s no way to tell if you\'re ' +
                            'pointing in the right direction. Through stats and analysis ' +
                            'we can help you understand how your customers interact with ' +
                            ' your product.',
    DESIGN_HEADLINE:        'Design',
    DESIGN_PARAGRAPH:       'We don\'t just make pretty things; we craft products that ' +
                            'are useful and achieve your goals. Instead of drawing plain images, ' +
                            'we design dynamic user experiences right in the browser.',
    DEVELOPMENT_HEADLINE:   'Development',
    DEVELOPMENT_PARAGRAPH:  'We understand how the Internet works, from network ' +
                            'infrastructure up to browser quirks. We use the latest technologies ' +
                            'to build your project, whether it\'s a small site or a high traffic product.',
    MAINTENANCE_HEADLINE:   'Maintenance',
    MAINTENANCE_PARAGRAPH:  'We grow alongside our customers. We like to innovate constantly with ' +
                            'your products as your goals and customers evolve in time.',
    WORK_HEADLINE:          'Recent work',
    ENTER_LINK:             'ENTER.CO, a responsive web-app',
    KYK_LINK:               'KIENYKE, mobile-first website',
    CLIENTS_HEADLINE:       'Our clients say',
    PROCESS_HEADLINE:       'Our process',
    TEAM_HEADLINE:          'The team'

  };

  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);

  $translateProvider.determinePreferredLanguage();
  $translateProvider.fallbackLanguage('en');
})

.controller('HomeController', function($scope, $location, AnalyticsTracker, smoothScroll) {
  AnalyticsTracker.pageTrack($location.url());

  $scope.scroll = function(id) {
    smoothScroll(document.getElementById(id), {
      offset: 60 // The height of the topbar
    });
  };
});
