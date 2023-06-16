const iconeMenu = document.querySelector('#menu');
const dropdownEndereco = document.querySelector('#dropdown-endereco');
const dropdownHorario = document.querySelector('#dropdown-horario');

function alternarDropdown(elemento) {
  const elementoAberto = Number(elemento.getAttribute('active'));
  elemento.setAttribute('active', Number(!elementoAberto));
}

iconeMenu.onclick = () => alternarDropdown(iconeMenu)
dropdownEndereco.onclick = () => alternarDropdown(dropdownEndereco)
dropdownHorario.onclick = () => alternarDropdown(dropdownHorario)
