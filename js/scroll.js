const nav = document.querySelector('nav');
const linksNavbar = Array.from(document.querySelectorAll('.link-navbar'));

function atualizarScroll() {
  linksNavbar.forEach(
    (l) =>
      (l.onclick = (e) => {
        const elem = document.querySelector(`div#${l.getAttribute('link')}`);
        const posicao = elem.offsetTop - scrollY - nav.scrollHeight;

        scrollBy({
          behavior: 'smooth',
          top: posicao,
        });
      })
  );
}
