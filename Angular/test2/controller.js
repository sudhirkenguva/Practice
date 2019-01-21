var app = angular.module('myApp', []);

app.run(function($rootScope) {
    $rootScope.color = 'Red';
});

app.controller('myCtrl', function($scope, $rootScope) {
    $scope.color = 'Green';
    $rootScope.color = 'blue';
    $scope.list = ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'AJAX', 'NODE', 'TYPESCRIPT', 'ANGULAR', 'ANGULAR2', 'GIT'];
});