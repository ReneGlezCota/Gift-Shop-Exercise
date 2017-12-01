define([
    'jquery',
    'angular',
    '../modules/login/index'
], function ($, angular) {
    return angular.module('app', [
        'app.login',
        'ui.router'
    ])
    .run(['$rootScope', '$location', '$state', function($rootScope, $location, $state) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {            
            $state.go("login");            
        });

        $rootScope.$on('$routeChangeStart', function(event, next) {
            $location.path("/login");        
        });
    }])
    .controller('AppCtrl', function($scope, $timeout, $http, $window, $location) {
    });
});
