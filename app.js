var spaApp = angular.module("myApp", ['ngRoute']);

spaApp.config(function ($routeProvider) {
  
  $routeProvider
    .when("/", {
      templateUrl: "pages/book.html",
      controller: "bookController",
    })
    .when("/chapter", {
      templateUrl: "pages/chapter.html",
      controller: "chapterController",
    })
    .when("/book", {
      templateUrl: "pages/book.html",
      controller: "bookController",
    })
    .when("/book/:bookId", {
      templateUrl: "pages/bookdetail.html",
      controller: "bookDetailController",
    })
    .when("/book/:bookId/ch/:num", {
      templateUrl: "pages/chapterdetail.html",
      controller: "chapterDetailController",
    });
  // console.log($routeProvider);

});

// creating a service
spaApp.service('bookNameService', function(){
  var self = this;
  this.bookName = "Learn Angular under the hood";
  this.bookNameLength = function(){
    return self.bookName.length;
  }
});

spaApp.controller("bookController", [
  "$scope","bookNameService",
  function ($scope, bookNameService) {
    $scope.bookName = bookNameService.bookName;
    $scope.$watch('bookName', function(){
      bookNameService.bookName = $scope.bookName;
    });
  },
]);
spaApp.controller("chapterController", [
  "$scope","bookNameService",
  function ($scope, bookNameService) {
    $scope.bookName = bookNameService.bookName;
    $scope.$watch('bookName', function(){
      bookNameService.bookName = $scope.bookName;
    });
  },
]);

spaApp.controller("bookDetailController", [
  "$scope","$routeParams",
  function ($scope, $routeParams) {
    $scope.bookDescription = "This book is for those who do not imitate, rather understand angular, one of the most popular JavaScript frameworks.";
    $scope.bookId=$routeParams.bookId;
    // $scope.chNum = $routeParams.num;
    // console.log("Book Id: ",$routeParams.bookId);
    // console.log("Chapter Number of this book: ",$routeParams.num);

  },
]);
spaApp.controller("chapterDetailController", [
  "$scope","$routeParams",
  function ($scope, $routeParams) {
    $scope.bookId = $routeParams.bookId;
    $scope.chNum = $routeParams.num;
    
    // console.log("Book Id: ",$routeParams.bookId);
    // console.log("Chapter Number of this book: ",$routeParams.num);

  },
]);