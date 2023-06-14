const carrossel = document.querySelector('#carrossel-fotos')

const FOTOS = [
	"static/carrossel/0001.jpg",
	"static/carrossel/0002.jpg",
	"static/carrossel/0003.jpg",
	"static/carrossel/0004.jpeg",
	"static/carrossel/0005.jpeg",
];

function carregarFotosCarrossel() {
	FOTOS.forEach(foto => {
		const fotoSpan = document.createElement('span')
		fotoSpan.style.backgroundImage = `url(${foto})`;
		carrossel.appendChild(fotoSpan)
	});
}