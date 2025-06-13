var spaApp = angular.module("myApp", ['ngRoute']);
spaApp.config(function ($routeProvider) {
  
  $routeProvider
    .when("/", {
      templateUrl: "pages/book.html",
      // controller: bookController,
    })
    .when("/chapter", {
      templateUrl: "pages/chapter.html",
      // controller: chapterController,
    })
    .when("/book", {
      templateUrl: "pages/book.html",
      // controller: bookController,
    });
  // console.log($routeProvider);

});

spaApp.controller("bookController", [
  "$scope",
  function ($scope) {
    $scope.name = "Book";
  },
]);

spaApp.controller("chapterController", [
  "$scope",
  function ($scope) {
    $scope.name = "Book";
  },
]);
