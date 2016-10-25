/*
* @Author: alireza-saberi
* @Date:   2016-10-24 11:47:39
* @Last Modified by:   alireza-saberi
* @Last Modified time: 2016-10-25 05:59:50
*/
myApp.factory('authFact', ["$cookieStore", function($cookieStore){
    // 
    var authFact = {};

    authFact.setAccessToken = function(accessToken){
        $cookieStore.put('accessToken', accessToken);
        // authFact.authToken = accessToken;
    };

    authFact.getAccessToken = function(){
        authFact.authToken = $cookieStore.get('accessToken');
        return authFact.authToken;
    };

    authFact.setUserInfo = function(userInfo){
        $cookieStore.put('userInfo', userInfo);
    };

    authFact.getUserInfo = function(){
        authFact.userInfo = $cookieStore.get('userInfo');
        return authFact.userInfo;
    };

    authFact.setUserObj = function(userObj){
        $cookieStore.put('userObj', userObj);
    };

    authFact.getUserObj = function(){
        authFact.userInfo = $cookieStore.get('userObj');
        return authFact.userObj;
    };

    return authFact;
}]);