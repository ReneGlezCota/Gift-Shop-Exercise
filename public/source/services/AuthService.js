define(['angular'], function(angular){
    'use strict'

    var module = angular.module('service.auth', []);

    module.service('AuthenticationService', ['$http', '$window', function($http, $window){
        var result;
        var GetApiCredentials = {
            query : function(username, password){                
                var data = $http.post('/api/credentials/', angular.toJson({user : username, pw : password})).then(function(result){
                        
                    var userValue =  {
                        username : result.data.data[0].username,
                        role : result.data.data[0].rolename,
                        name : result.data.data[0].firstname + ', ' + result.data.data[0].lastname
                    };

                    $window.sessionStorage.setItem('currentUser', JSON.stringify(userValue));

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