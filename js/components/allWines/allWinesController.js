angular.module('allWines').controller("allWinesController", ["$http", function allWinesController($http) {



  $http.get('http://wine.wildcodeschool.fr/api/v1/wines').then((response) => {
      // this callback will be called asynchronously
      // when the response is available

       this.wines = response.data

  // "_id": "58a44795b1b1ba0b5975df56",
  //    "name": "quis",
  //    "description": "Tempor eiusmod deserunt commodo velit. Qui culpa ex in sint labore fugiat proident eu culpa tempor ullamco ullamco. Consectetur ex in sunt in qui ut anim laborum officia voluptate tempor non officia. In irure sunt consectetur ad do ullamco voluptate sit tempor consectetur labore. Duis esse sint cillum in veniam esse dolore anim. Excepteur sint minim ipsum labore.\r\n",
  //    "picture": "/img/quis.jpg",
  //    "owner":"58a44d20cceabce8ce6c281a"

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
