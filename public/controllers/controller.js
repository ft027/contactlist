/**
 * Created by Fabian Tschullik on 01.07.2016.
 */
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


    var refresh = function() {

        $http.get('/contactlist').then(function (response) {
            $scope.contactlist = response.data;
            $scope.contact = "";

        });﻿

    };
    refresh();

    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact);


        refresh();
    }

$scope.remove =function (id) {

    console.log(id);
    $http.delete('/contactlist/'+ id);
    refresh();
    

}
    

    
    
    
}]);