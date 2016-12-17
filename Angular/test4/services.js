var sd, rd;
var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $location, $timeout, $interval) {
    sd = $scope;
    $scope.myUrl = '';
    $scope.myHeader = "Welcome :)";
    $scope.curTime = new Date().toLocaleTimeString();
    //location service
    $scope.myUrl = $location.absUrl();

    //timeout service
    $timeout(function() {
        $scope.myHeader = "How is your day?";
    }, 2000);

    //interval service
    $interval(function() {
        $scope.curTime = new Date().toLocaleTimeString();
    }, 1000);
});