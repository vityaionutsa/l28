angular.module("myApp", []).controller("myCtrl", function ($scope) {
  $scope.checkboxes = [false, false, false, false];
  $scope.checkboxNumbers = "";
  
  $scope.updateCheckboxes = function() {
    var numbers = $scope.checkboxNumbers.split(",");
    
    for(var i=0; i<numbers.length; i++) {
      var number = parseInt(numbers[i].trim()) - 1; // віднімаємо 1, тому що масив починається з 0
      
      if(number >= 0 && number < $scope.checkboxes.length) {
        $scope.checkboxes[number] = true;
      }
    }
  };
});
