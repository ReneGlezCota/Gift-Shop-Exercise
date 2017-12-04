/**
 * Home controller definition
 */
define(['./module'], function (module) {    
    module.controller('HomeController', ['$scope', '$window', '$filter', 'ProductService', 'CategoryService', 'DeletedProductService', function ($scope, $window, $filter, ProductService, CategoryService, DeletedProductService) {
      var session = angular.fromJson($window.sessionStorage.getItem("currentUser"))
      $scope.uservalues = session;

      $scope.promiseProduct = '';
      $scope.promiseCategory = '';
      $scope.products = '';
      $scope.categories = '';
      $scope.shoped = [];
      $scope.filteredItems = null;
      
      var initProduct  = function() {          
        $scope.promiseProduct = ProductService.getAllProducts().then(function(result){
          $scope.products = result.data.data;
          $scope.filteredItems = result.data.data;
        });
      };
      var initCategories = function() { 
        $scope.promiseCategory = CategoryService.getAllCategory().then(function(result){
          $scope.categories = result.data.data;
          if($scope.categories != null){
            $scope.categories.push({
              id: 0,
              name : ''
            })
          }
        });  
      };

      initProduct();
      initCategories();

      $scope.addItemToCart = function(values){
        $scope.shoped.push({
          name : values.name,
          price : values.price
        });
      };

      $scope.$watch('query' , function (newvalue, oldvalue) {
        $scope.products = $scope.filteredItems;

        var obj = _($scope.products).filter(
          function(r){
            for(var key in r){
              if(_(r[key]).toString().toUpperCase().includes(newvalue.toString().toUpperCase())){return true;};
            }
            return false;
          }
        ).value();
        
        $scope.products = obj;
      });   
      
      $scope.deletedItemToCart = function(val){
        $scope.promiseProduct = DeletedProductService.deleteProduct(val.id).then(function(result){
          initProduct();
        });  
      }
  }]);
});