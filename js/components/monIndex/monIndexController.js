angular.module('monIndex').controller('monIndexController', [function(){


}]);

.controller('allWinesController', [function(){

$http({
  method: 'GET',
  url: 'http://wine.wildcodeschool.fr/api/v1/wines'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
		console.log(response);
  }, function errorCallback(response) {
		console.log("zut");
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}]);
