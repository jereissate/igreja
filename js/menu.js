const iconeMenu = document.querySelector('#menu');

function mudarMenu() {
  const menuAberto = Number(iconeMenu.getAttribute('active'));
  iconeMenu.setAttribute('active', Number(!menuAberto));
}

iconeMenu.onclick = mudarMenu;
