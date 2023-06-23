var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.numbers = [5, 10, 15];
  $scope.sum = $scope.numbers.reduce((a, b) => a + b, 0);
  
  $scope.addNumber = function() {
    if ($scope.newNumber !== null && !isNaN($scope.newNumber)) {
      $scope.numbers.push(parseInt($scope.newNumber));
      $scope.sum += parseInt($scope.newNumber);
      $scope.newNumber = null;
    }
  }
});