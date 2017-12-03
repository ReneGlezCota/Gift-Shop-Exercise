define([
    'angular',
    'ui.router'
  ], function (angular) {  
    return angular.module('app.home', [
      'ui.router'
    ]).config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'modules/home/home.html',
          controller: 'HomeController'
        });
    });  
  });