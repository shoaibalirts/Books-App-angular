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
shoaibApp.controller('mainController',['$scope','$filter', '$timeout', function($scope,$filter,$timeout){
  $scope.twitterRoute='';
  $scope.lowercaseHandle = function(){
    return $filter("lowercase")($scope.twitterRoute);
  }
  $scope.$watch('twitterRoute',function(newValue, oldValue){
    console.info("Changed!")
    console.log("OldValue: "+oldValue);
    console.log("NewValue: "+newValue);  
  });
  $timeout(function(){
    $scope.twitterRoute="newTwitterRoute";
    console.log("Scope Changed!");
    
  },3000);
  
}]);