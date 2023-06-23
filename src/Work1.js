var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.countries = ['Україна', 'США', 'Китай', 'Японія'];
    
    $scope.addCountry = function() {
        if ($scope.newCountry != '') {
            $scope.countries.push($scope.newCountry);
            $scope.newCountry = '';
            $scope.countries.sort();
        }
    };
    
    $scope.removeCountry = function(index) {
        $scope.countries.splice(index, 1);
    };
});