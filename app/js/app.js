/*
* @Author: Ali
* @Date:   2016-10-22 00:08:34
* @Last Modified by:   alireza-saberi
* @Last Modified time: 2016-10-25 09:04:48
*/

var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

// contacts for versioning
myApp.constant( 'version', '1.0' );

// configuration of the routes
myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'views/login.html',
        controller: 'HomeCtrl'

    })
    .when('/dashboard', {
        templateUrl:'views/dashboard.html',
        controller: 'DashboardCtrl',
        authenticated: true

    })
    .otherwise({
        templateUrl:'views/login.html',
        controller: 'HomeCtrl'

    });
}]);

myApp.run(["$rootScope", "$location", "authFact", function($rootScope, $location, authFact){
    $rootScope.$on('$routeChangeStart', function(event, next, current){

        // if the route is authenticated, user should get the token
        if(next.$$route.authenticated){
            var userAuth  = authFact.getAccessToken();
            if(!userAuth){
                $rootScope.$apply(function(){
                    $location.path('/');
                    $location.replace();
                });
            }
        }
    });
}]);
