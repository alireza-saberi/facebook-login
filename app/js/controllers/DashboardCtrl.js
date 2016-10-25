/*
* @Author: alireza-saberi
* @Date:   2016-10-24 11:28:51
* @Last Modified by:   alireza-saberi
* @Last Modified time: 2016-10-25 09:03:09
*/
myApp.controller('DashboardCtrl', ["$scope", "authFact", "$location", function($scope, authFact, $location){
            $scope.userObj = authFact.getUserObj();
            FB.api('/me', function(res) {
                console.log('Successful login for: ' + res.name);
                $scope.$apply(function(){
                    $scope.name = res.name;
                    $scope.userInfo = authFact.setUserInfo(res.name);
                });
            });

$scope.FBLogout = function(){
    FB.logout(function() {
        // user is now logged out
        console.log("Good bye Facebook ...");
        $scope.$apply(function(){
            $location.path('/');
            $location.replace();
        });
    });
};

}]);