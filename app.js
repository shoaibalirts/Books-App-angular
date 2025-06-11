// shoaibApp is an angular module
var shoaibApp = angular.module("myApp", ['ngResource', 'ngMessages']);
/*
shoaibApp.person = "Shoaib Ali";
shoaibApp.logPerson = function(){
    console.log(shoaibApp.person);
    
}
shoaibApp.logPerson();

console.log("-----------Angular Module Object-------");
console.log(shoaibApp);
*/
/*
shoaibApp.greeting = function(en, dk){
    this.englishGreeting = en;
    this.danishGreeting = dk;
}

var myGreeting = new shoaibApp.greeting('Hello, World!', 'Hej, Verden!');
// console.log("myGreeting: ",myGreeting);

shoaibApp.controller('mainController', function($scope, myGreeting){
    $scope.greeting = myGreeting.englishGreeting;
});
shoaibApp.controller('secondaryController',function($scope){
    $scope.greeting = myGreeting.danishGreeting;
});
*/

shoaibApp.controller("mainController", function ($scope, $log, $filter, $resource) {
  // model or data
  $scope.greeting = "hej verden";
  $log.warn($scope.greeting);
    console.log($resource);
    
  $scope.greeting = $filter("uppercase")($scope.greeting);
});

shoaibApp.controller("secondaryController", function ($scope, $filter) {
  $scope.greeting = "hejsa";
  $scope.greeting = $filter("uppercase")($scope.greeting);
});
