angular.module('monMagasin').controller('monMagasinController', ["$http", "$scope", function magasinMapController($http, $scope) {
		
		let monMagasinCollection;

		let map = L.map('mapid', {
			center: [44.83, -0.57],
			zoom: 14,
			zoomControl: false
		});
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
		}).addTo(map);



	}])