import SlicingPortfolioComponent from '/scripts/components/SlicingPortfolioComponent.js';

/* Theme Handling */

const isPrefersDarkScheme = window.matchMedia('(prefer-color-scheme: dark)');
const browserTheme = isPrefersDarkScheme ? 'dark' : 'light';

let currentTheme = localStorage.getItem('theme') || browserTheme;
document.body.dataset.theme = currentTheme;

const metaTheme = document.querySelector('meta[name="theme-color"]');
metaTheme.setAttribute('content', (currentTheme === 'light') ? '#fff' : '#333');

const themeToggleButton = document.querySelector('#theme-toggle');
themeToggleButton.addEventListener('click', () => {
  switch (currentTheme) {
    case 'light':
      currentTheme = 'dark';
      document.body.dataset.theme = currentTheme;
      metaTheme.setAttribute('content', '#333');
      localStorage.setItem('theme', currentTheme);
      break;
    case 'dark':
      currentTheme = 'light';
      document.body.dataset.theme = currentTheme;
      metaTheme.setAttribute('content', '#fff');
      localStorage.setItem('theme', currentTheme);
  }
});

/* Copyright Year */

const copyrightYear = document.querySelector('#copyright span');
copyrightYear.innerHTML = new Date().getFullYear();

/* Slicing Portfolio Component */

const slicingPortfolio = new SlicingPortfolioComponent({
  container: document.querySelector('#slicing-portfolio'),
});
