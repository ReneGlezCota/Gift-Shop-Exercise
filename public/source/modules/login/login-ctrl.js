/**
 * Login controller definition
 */
define(['./module'], function (module) {    
      module.controller('LoginController', ['$scope', '$state', '$rootScope', 'AuthenticationService', function ($scope, $state, $rootScope, AuthenticationService) {
        $scope.username = '';
        $scope.password = '';
        $scope.promiseLogin = '';

        $scope.login = function() {          
          $scope.promiseLogin = AuthenticationService.query($scope.username, $scope.password).then(function(result){
            if(result.data.success){              
              $state.go("home");
            }
          });       
        };        
    }]);
});
    