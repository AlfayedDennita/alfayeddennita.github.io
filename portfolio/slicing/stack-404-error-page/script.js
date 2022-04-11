const hamburgerButton = document.querySelector('#hamburger-button');
const navigationContainer = document.querySelector('header nav');

hamburgerButton.addEventListener('click', () => {
  navigationContainer.classList.toggle('open');
});
