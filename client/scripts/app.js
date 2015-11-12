var myApp = angular.module("myApp", []);

myApp.controller('WelcomeController', ["$scope", "$http", "$filter", function($scope, $http, $filter){
    var orderBy = $filter('orderBy');
    $scope.people = [];

    $scope.getPeople = function() {
        $http.get('/data').then(function(response){
            $scope.people = response.data;
        });
    };

    $scope.getPeople();

    $scope.order = function(predicate, reverse) {
        $scope.people = orderBy($scope.people, predicate, reverse);
    };

}]);