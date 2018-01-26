"use strict";

angular.module("MushroomApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
      templateUrl: "partials/mushrooms.html",
      controller: "MushroomCtrl"
    })
    .otherwise("/")
});