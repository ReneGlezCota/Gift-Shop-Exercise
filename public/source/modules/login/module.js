define([
    'angular',
    'ui.router',
    '../../services/AuthService'
  ], function (angular) {  
    return angular.module('app.login', [
      'ui.router',
      'service.auth'
    ]).config(function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'modules/login/login.html',
          controller: 'LoginController'
        });
    });  
  });