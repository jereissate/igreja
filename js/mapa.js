const COORDENADAS_IGREJA = {
	latitude: -3.7155555,
	longitude: -38.5935414
};

function carregarMapa() {
	const map = L.map('map').setView([
		COORDENADAS_IGREJA.latitude, COORDENADAS_IGREJA.longitude
	], 13);
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	const marker = L.marker([COORDENADAS_IGREJA.latitude, COORDENADAS_IGREJA.longitude]).addTo(map);
	marker.bindPopup("Comunidade Santo Antônio").openPopup();
}