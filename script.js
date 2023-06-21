const hambBtn = document.getElementById('nav-toggle');
const menuMobile = document.getElementById('menu-mobile');

const sorteios = document.getElementById('sorteios');

function animar() {
  hambBtn.classList.toggle('active-toggle');
  menuMobile.classList.toggle('active-toggle');
}

document.onclick = function (e) {
  if (e.target.id !== 'nav-toggle' && e.target.id !== 'menu-mobile') {
    hambBtn.classList.remove('active-toggle');
    menuMobile.classList.remove('active-toggle');
  }
};
