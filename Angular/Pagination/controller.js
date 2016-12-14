var sd;
app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    sd = $scope;
    $scope.commentsData = '';
    $scope.commentsCount = 0;
    $scope.pageCount = 0;
    $scope.currentPage = 1;
    $scope.commentsPerPage = 4;
    $scope.range = [];
    $scope.pagesToShow = [];
    $scope.pagedComments = [];
    $scope.pagesPerScreen = 3;
    // Data Fetching
    $http({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/comments"
    }).then(function(response) {
        $scope.commentsData = response.data;
        $scope.commentsCount = response.data.length;
        $scope.pageCount = Math.ceil($scope.commentsCount / $scope.commentsPerPage);

        for (let i = 1; i <= $scope.pageCount; i++) {
            $scope.range.push(i);
        }
        $scope.showPagedResult($scope.currentPage);

        $scope.pagesToShow = $scope.range.slice(0, $scope.pagesPerScreen);
    });

    $scope.showPagedResult = function(n) {
        $scope.currentPage = n;
        $scope.pagedComments = [];
        var end = n * $scope.commentsPerPage;
        var begin = end - ($scope.commentsPerPage - 1);
        $scope.pagedComments = $scope.commentsData.slice(begin - 1, end);
        console.log('n is ' + n);
    }

    $scope.nextPages = function() {
        if ($scope.currentPage < $scope.pageCount - $scope.pagesPerScreen) {
            var cp = $scope.currentPage;
            var pps = $scope.pagesPerScreen;
            var page = Math.ceil(cp / pps) * pps;
            $scope.pagesToShow = $scope.range.slice(page, page + pps);
            console.log(page + '--> page');
            console.log(page + pps + '--> page+cpp');
            console.log($scope.pagesToShow);
            $scope.showPagedResult($scope.range[page]);
        }

    }

    $scope.prevPages = function() {

        if ($scope.currentPage > $scope.pagesPerScreen) {
            var cp = $scope.currentPage;
            var pps = $scope.pagesPerScreen;
            var page = Math.floor(cp / pps) * pps;
            $scope.pagesToShow = $scope.range.slice(page - pps, page);
            console.log(page + '--> page');
            console.log(page + pps + '--> page+cpp');
            console.log($scope.pagesToShow);
            $scope.showPagedResult($scope.range[page - pps]);
        }


    }

    $scope.lastPage = function() {
        if ($scope.currentPage < $scope.pageCount - $scope.pagesPerScreen) {
            $scope.pagesToShow = $scope.range.slice($scope.pageCount - $scope.pagesPerScreen, $scope.pageCount);
            $scope.showPagedResult($scope.pageCount);
        }

    }

    $scope.firstPage = function() {
        if ($scope.currentPage > $scope.pagesPerScreen) {
            $scope.pagesToShow = $scope.range.slice(0, $scope.pagesPerScreen);
            $scope.showPagedResult(1);
        }


    }


});