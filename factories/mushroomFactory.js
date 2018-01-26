'use strict';

angular.module("MushroomApp").factory("MushroomFactory", function($q, $http) {

  let getShrooms = () => {
    return $q( (resolve, reject) => {
      $http
      .get("../mushrooms.json")
      .then( (shrooms) => {
        resolve(shrooms);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  return { getShrooms };

});