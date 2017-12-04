define(['angular'], function(angular){
    'use strict'

    var module = angular.module('service.product', []);

    module.service('ProductService', ['$http', function($http){
        var result;
        var GetApiProducts = {
            getAllProducts : function(){                
                var data = $http.get('/api/allproducts/').then(function(result){                    
                    return result;
                }, function(err){
                    console.log('Error in the charge of values ' + err);
                });
                return data;
            }
        };
        return GetApiProducts;
    }])
    .service('DeletedProductService', ['$http', function($http){
        var result;
        var DeleteApiProducts = {
            deleteProduct : function(val) {
                var data = $http.delete('/api/deleteproduct/' + val).then(function(result){
                    return result;
                }, function(err){
                    console.log('Error in the delete of values ' + err);
                });
                return data;
            }
        };
        return DeleteApiProducts;
    }]);
});