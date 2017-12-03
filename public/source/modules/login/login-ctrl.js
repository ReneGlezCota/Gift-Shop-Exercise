/**
 * Login controller definition
 */
define(['./module'], function (module) {    
      module.controller('LoginController', ['$scope', '$state', 'AuthenticationService', function ($scope, $state, AuthenticationService) {
        $scope.username = '';
        $scope.password = '';
        $scope.promiseLogin = '';

        $scope.login = function() {          
          $scope.promiseLogin = AuthenticationService.query($scope.username, $scope.password).then(function(result){
            if(result.data){
              console.log(result.data);
              $state.go("home");
            }
          });       
        };        
    }]);
});
    