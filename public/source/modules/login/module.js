define([
    'angular',
    'ui.router'
  ], function (angular) {  
    return angular.module('app.login', [
      'ui.router'
    ]).config(function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'modules/login/login.html',
          controller: 'LoginController'
        });
    });  
  });