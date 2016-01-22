/**
 * Created by atishay-jain on 21/1/16.
 */


var a=angular.module('instaA',[]);
a.controller('instaA',function($scope,$http){
    $http.post('http://localhost:1337/instaA').success(function(options){
        console.log(options);
        $scope.options = options;
    });
});