var shoaibApp = angular.module("myApp", []);
/*
shoaibApp.controller('mainController',['$scope','$timeout', function($scope, $timeout){
  $scope.name="Shoaib";
  $timeout(function(){
      $scope.name="Ahmed";
      console.log("Ahmed");
      
  }, 3000);
}]);
*/
shoaibApp.controller('mainController',['$scope','$filter', function($scope,$filter){
  $scope.twitterRoute='';
  $scope.lowercaseHandle = function(){
    return $filter("lowercase")($scope.twitterRoute);
  }

  
}]);