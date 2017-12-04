define([
    'angular',
    'ui.router',
    '../../services/ProductService',
    '../../services/CategoryService'
  ], function (angular) {  
    return angular.module('app.home', [
      'ui.router',
      'service.product',
      'service.category'
    ]).config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'modules/home/home.html',
          controller: 'HomeController'
        });
    });  
  });