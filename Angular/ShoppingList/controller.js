var sd;
app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    sd = $scope;
    $scope.newItem = '';
    $scope.errorResponse = false;
    $scope.listItems = [];

    $scope.add = function() {
        var temp = $scope.newItem;
        // to make 1st letter of string to upper case & all others to lower case.
        temp = temp.toLowerCase();
        temp = temp[0].toUpperCase() + temp.slice(1);

        if ($scope.listItems.indexOf(temp) < 0) {
            $scope.listItems.push(temp);
            $scope.newItem = '';
        } else {
            $scope.errorResponse = true;
        }
    }

    $scope.remove = function(itemIndex) {
        console.log(itemIndex + 'Index');
        $scope.listItems.splice(itemIndex, 1);
    }

    $scope.$watch('newItem', function() {
        $scope.errorResponse = false;
    });
    $scope.$watchCollection('listItems', function() {
        $scope.errorResponse = false;
    });
});