define(['angular'], function(angular){
    'use strict'

    var module = angular.module('service.category', []);

    module.service('CategoryService', ['$http', function($http){
        var result;
        var GetApiCategory = {
            getAllCategory : function(){                
                var data = $http.get('/api/allcategories/').then(function(result){                    
                    return result;
                }, function(err){
                    console.log('Error in the charge of values ' + err);
                });
                return data;
            }
        };
        return GetApiCategory;
    }]);
});