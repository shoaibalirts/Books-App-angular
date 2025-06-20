var spaApp = angular.module("myApp", ["ngRoute"]);

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
      templateUrl: "pages/chapter-detail.html",
      controller: "chapterDetailController",
    });
  // console.log($routeProvider);
});

// creating a service
spaApp.service("bookNameService", function () {
  var self = this;
  this.bookName = "Learn Angular under the hood";
  this.bookNameLength = function () {
    return self.bookName.length;
  };
});

spaApp.controller("bookController", [
  "$scope",
  "bookNameService",
  function ($scope, bookNameService) {
    $scope.bookName = bookNameService.bookName;
    $scope.$watch("bookName", function () {
      bookNameService.bookName = $scope.bookName;
    });
  },
]);
spaApp.controller("chapterController", [
  "$scope",
  "bookNameService",
  function ($scope, bookNameService) {
    $scope.bookName = bookNameService.bookName;
    $scope.$watch("bookName", function () {
      bookNameService.bookName = $scope.bookName;
    });
  },
]);

spaApp.controller("bookDetailController", [
  "$scope",
  "$routeParams",
  function ($scope, $routeParams) {
    $scope.bookDescription =
      "This book is for those who do not imitate, rather understand angular, one of the most popular JavaScript frameworks.";
    $scope.bookId = $routeParams.bookId;
    // $scope.chNum = $routeParams.num;
    // console.log("Book Id: ",$routeParams.bookId);
    // console.log("Chapter Number of this book: ",$routeParams.num);
  },
]);
spaApp.controller("chapterDetailController", [
  "$scope",
  "$routeParams",
  function ($scope, $routeParams) {
    $scope.bookId = $routeParams.bookId;
    $scope.chNum = $routeParams.num;

    // console.log("Book Id: ",$routeParams.bookId);
    // console.log("Chapter Number of this book: ",$routeParams.num);
  },
]);

var detail = [
  { name: "Learn and Understand JavaScript", chapters: 10 },
  { name: "Learn and Understand React", chapters: 15 },
  { name: "Learn and Understand Vue", chapters: 18 },
  { name: "Learn and Understand Angular", chapters: 20 },
];
const bookNum = 1;
spaApp.controller("myBookDetailController", [
  "$scope",
  function ($scope) {
    $scope.bookName = detail[bookNum].name;
    $scope.totalChapters = detail[bookNum].chapters;
  },
]);
spaApp.directive("myBookDetail", function () {
  return {
    restrict: "A",
    templateUrl: function (elem, attr) {
      return "pages/book-" + attr.type + ".html";
    },
  };
});
