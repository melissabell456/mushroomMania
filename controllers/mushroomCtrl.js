'use strict';

angular.module("MushroomApp").controller("MushroomCtrl", function($scope, MushroomFactory) {

  MushroomFactory.getShrooms()
  .then((shroomObjects) => {
    console.log(shroomObjects);
    $scope.shroomArr = [];
    for (let shroom in shroomObjects) {
      $scope.shroomArr.push(shroomObjects[shroom]);
    }
    console.log($scope.shroomArr);
  });

});