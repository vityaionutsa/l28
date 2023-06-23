
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.countries = ['Україна', 'США', 'Канада', 'Китай', 'Японія', 'Париж', 'Пусан'];
  $scope.showOnlyWithP = false;
  
  $scope.filterCountries = function(country) {
    if (!$scope.showOnlyWithP) {
      return true;
    }
    return country.toLowerCase().includes('п') || country.toLowerCase().includes('П');
  };
});