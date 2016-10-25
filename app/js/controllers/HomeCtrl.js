/*
* @Author: alireza-saberi
* @Date:   2016-10-24 08:54:39
* @Last Modified by:   alireza-saberi
* @Last Modified time: 2016-10-25 09:06:03
*/


myApp.controller('HomeCtrl', ["$scope", "authFact", "$location", function($scope, authFact, $location){

    $scope.name = "Login please";
    $scope.FBLogin = function(){
        FB.getLoginStatus(function(response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        console.log("Checking Login Status ...");
            if (response.status === 'connected'){
                // Logged into your app and Facebook.
                console.log('Welcome!  You are already connected, We are fetching your information.... ');
                var accessToken = response.authResponse.accessToken;
                FB.api('/me', function(res) {
                    $scope.$apply(function(){
                        console.log('Successful login for: ' + res.name);
                        authFact.setUserInfo(res.name);
                    });
                    
                });
                console.log("Changing route to dashboard ...");
                $scope.$apply(function(){
                    authFact.setAccessToken(accessToken);
                    authFact.setUserInfo($scope.username);
                    authFact.setUserObj(response);
                    $location.path('/dashboard');
                    $location.replace();
                });
            }else if(response.status === 'not_authorized'){
                // The person is logged into Facebook, but not your app.
                console.log(response.status);
            }
            else{
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
                console.log(response.status);
                FB.login(function(response){
                    if(response.authResponse){
                        FB.api('/me', function(res){
                            console.log('Good to see you, ' + res.name + '.');
                            var accessToken = response.authResponse.accessToken;
                            $scope.$apply(function(){
                                authFact.setAccessToken(accessToken);
                                // authFact.setUserInfo(res);
                                authFact.setUserObj(response);
                                $location.path("/dashboard");
                                $location.replace();
                            });
                        });
                    }
                    else{
                        console.log("User cancelled log or did not fully authorize.");
                    }
                });
            }
        });
    };
}]);