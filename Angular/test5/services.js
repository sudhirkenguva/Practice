  // https://jsonplaceholder.typicode.com/users  (10 entries)
  // https://jsonplaceholder.typicode.com/comments  (500 entries)

  var sd, rd;
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope, $http) {
      sd = $scope;

      $scope.peopleData = "Loading....";
      //   $http.get('https://jsonplaceholder.typicode.com/users')
      //       .then(function(response) {
      //           $scope.peopleData = response.data;
      //       }, function(error) {
      //           $scope.peopleData = "Something went wrong.:(";
      //       });
      // or the below code also work

      $http({
              method: "GET",
              url: "https://jsonplaceholder.typicode.com/users"
          })
          .then(function(response) {
              $scope.peopleData = response.data;
          }, function(error) {
              $scope.peopleData = "Something went wrong.:(";
          });


  });