'use strict';

angular.module('simian.home', [])

.config(function($translateProvider){
	var translationsES = {
    HEADLINE_MAIN: 'Construimos tecnología para seres humanos',
    PARAGRAPH: 'Normally, both your asses would be dead as fucking fried chicken,'
    + ' but you happen to pull this shit while Im in a transitional period so I dont'
    + ' wanna kill you, I wanna help you. But I cant give you this case, it dont'
    + ' belong to me. Besides, Ive already been through too much shit this morning'
    + ' over this case to hand it over to your dumb ass.',
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
    HEADLINE_ONE: 'Envision',
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
  $translateProvider.fallbackLanguage('en');;
})