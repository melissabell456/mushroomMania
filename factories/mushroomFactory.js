'use strict';

angular.module("MushroomApp").factory("MushroomFactory", function($q, $http) {

  let getShrooms = () => {
    return $q( (resolve, reject) => {
      $http
      .get("https://fir-a5a79.firebaseio.com/mushrooms.json")
      .then( (shrooms) => {
        console.log(shrooms.data);
        resolve(shrooms.data);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

  return { getShrooms };

});