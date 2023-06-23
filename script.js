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

const cards = {
  imgageSource: 'images/promos/nivia-na-neve.jpg',
  linkDaPromoção:
    'https://www.nivea.com.br/voce-na-neve-com-nivea?utm_source=google&utm_medium=cpc&utm_id=0717_ecommerce_promotion_vocenaneve_google-search_conversao_texto-dinamico&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH0kV9SKmQ57Krr0-vY1B-DyXTLU2I2pxru_-QxNz9HaetUKGOapbdkaAlZPEALw_wcB',
  title: 'Nivia Você Na Neve',
  dataLimite: 00 / 00 / 2023,
  premios: ['viagem', 'RS500 diário'],
};
