// shoaibApp is an angular module
var shoaibApp = angular.module('myApp',[]);
shoaibApp.person = "Shoaib Ali";
shoaibApp.logPerson = function(){
    console.log(shoaibApp.person);
    
}
shoaibApp.logPerson();

console.log("-----------Angular Module Object-------");
console.log(shoaibApp);

shoaibApp.controller('mainController', function($scope){
    // model or data
    $scope.greeting = "hej verden";
    
});
shoaibApp.controller('secondaryController', function($scope){
    $scope.greeting = 'hejsa';
});
