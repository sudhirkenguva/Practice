var app = angular.module("myApp", []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.fullName = function() {
        return $scope.firstName + ' ' + $scope.lastName;
    }
    $scope.list = ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'AJAX','NODE', 'TYPESCRIPT', 'ANGULAR', 'ANGULAR2', 'GIT'];
});