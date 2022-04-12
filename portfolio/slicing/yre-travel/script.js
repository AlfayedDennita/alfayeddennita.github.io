const hamburgerButton = document.querySelector('#hero-navigation button');
const navigationMenu = document.querySelector('#hero-navigation ul');

hamburgerButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('open');
});
