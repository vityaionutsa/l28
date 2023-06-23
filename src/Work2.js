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
  
  $scope.removeCountry = function() {
    var index = $scope.countries.indexOf($scope.removeCountryName);
    if (index != -1) {
      $scope.countries.splice(index, 1);
      $scope.removeCountryName = '';
    }
  };
});