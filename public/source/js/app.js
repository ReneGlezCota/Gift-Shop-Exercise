define([
    'jquery',
    'angular',
    '../modules/login/index',
    '../modules/home/index'
], function ($, angular) {
    return angular.module('app', [
        'ui.router',
        'app.login',
        'app.home'
    ])
    .config(function($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/login');
    })
    .run(['$location', '$state', function($location, $state) {
    }])
    .controller('AppCtrl', function($scope, $timeout, $http, $window, $location) {
    });
});
