angular.module('allWines').controller("allWinesController", ["$http", function allWinesController($http) {



  $http.get('http://wine.wildcodeschool.fr/api/v1/wines').then((response) => {
      // this callback will be called asynchronously
      // when the response is available

       this.wines = response.data

  		console.log(this.wines);
    }).catch(()=>{
  		console.log('OUppsss')
  	});
  }]);
// $http({
//   method: 'GET',
//   url: 'http://wine.wildcodeschool.fr/api/v1/wines'
// }).then(function successCallback(response) {
//     this callback will be called asynchronously
//     when the response is available
// this.wines = response.data;
//   console.log(wine);
// 		console.log(wines);
//   }, function errorCallback(response) {
// 		console.log("zut");
//     called asynchronously if an error occurs
//     or server returns response with an error status.
//   });
// }]);
