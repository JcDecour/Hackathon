angular.module('monMagasin').controller('monMagasinController', ["$http", "$scope", function magasinMapController($http, $scope) {



			// CARTE
		let monMagasinCollection;

		let map = L.map('mapid', {
			center: [44.83, -0.57],
			zoom: 14,
			zoomControl: false
		});

		L.marker([40.741895,-73.989308]).addTo(map);
		L.marker([40.741890,-73.989400]).addTo(map);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		// MARKET

		$http.get('http://wine.wildcodeschool.fr/api/v1/markets').then((response) => {
				// this callback will be called asynchronously
				// when the response is available

				 this.markets = response.data
				 this.markets.forEach((market) => {
					 let marker = market.position.split(", ").map((element) => {
						 return Number(element);
					 });
					 L.marker(marker).addTo(map)
			     .bindPopup(`<h5>${market.name}</h5><p>${market.description.slice(0, 10)}</p>`)
			     .openPopup();
					 // `<h3>${market.name}</h3>`
				 })

				console.log(this.markets);
			}).catch(()=>{
				console.log('OUppsss')
			});




	}])
