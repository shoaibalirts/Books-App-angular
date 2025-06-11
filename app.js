var shoaibApp = angular.module("myApp", []);
shoaibApp.controller('mainController',['$scope','$timeout', function($scope, $timeout){
  $scope.name="Shoaib";
  $timeout(function(){
      $scope.name="Ahmed";
      console.log("Ahmed");
      
  }, 3000);
}]);

