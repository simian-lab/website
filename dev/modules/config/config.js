'use strict';

angular.module('simian.config', [])

.constant('ROUTES_ENES', {
  'we-do': 'que-hacemos',
  'projects': 'proyectos',
  'clients': 'clientes',
  'we-are': 'quienes-somos',
  'location': 'ubicacion',
  'we-share': 'compartimos'
})
.constant('ROUTES_ESEN', {
  'que-hacemos': 'we-do',
  'proyectos': 'projects',
  'clientes': 'clients',
  'quienes-somos': 'we-are',
  'ubicacion': 'location',
  'compartimos': 'we-share'
})
;
