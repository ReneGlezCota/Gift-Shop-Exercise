if (typeof define !== 'function') {
    var define = require('amdefine')(module);
  }
  
  define({
    baseUrl: '.',
    paths: {
      'jquery'          : 'bower_components/jquery/dist/jquery.min',
      'angular'         : 'bower_components/angular/angular.min',
      'async'           : 'bower_components/requirejs-plugins/src/async',
      'ngStorage'       : 'bower_components/ngstorage/ngStorage.min',
      'ngResource'      : 'bower_components/angular-resource/angular-resource',
      'ui.router'       : 'bower_components/angular-ui-router/release/angular-ui-router',
      'loadash'         : 'bower_components/lodash/lodash',
      'bootstrap'       : 'bower_components/bootstrap/dist/js/bootstrap.min'  
    },
    priority:[
      'jquery',
      'angular'
    ],
    shim: {
      'angular': {
        'deps': ['jquery'],
        'exports': 'angular'
      },
      'ngResource': ['angular'],
      'ngStorage': ['angular'],
      'ui.router' : ['angular'],
      'bootstrap': { deps: ['jquery'] }
    }
  });