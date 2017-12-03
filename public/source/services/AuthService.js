define(['angular'], function(angular){
    'use strict'

    var module = angular.module('service.auth', ['ngStorage', 'ngResource']);

    module.service('AuthenticationService', ['$http', function($http){
        var result;
        var GetApiCredentials = {
            query : function(username, password){                
                var data = $http.post('/api/credentials/', angular.toJson({user : username, pw : password})).then(function(result){
                        return result;
                    }, function(err){
                        console.log('Error in the login process ' + err);
                    });
                return data;
            }
        };
        return GetApiCredentials;
    }]);
});