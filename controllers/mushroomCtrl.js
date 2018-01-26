'use strict';

angular.module("MushroomApp").controller("MushroomCtrl", function($scope, MushroomFactory) {

  MushroomFactory.getShrooms()
  .then((shroomObjects) => {
    $scope.shroomArr = [];
    for (let shroom in shroomObjects.data.mushrooms) {
      $scope.shroomArr.push(shroomObjects.data.mushrooms[shroom]);
    }
    console.log($scope.shroomArr);
  });

});