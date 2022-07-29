let theme = 'light';
const body = document.querySelector('body');
const themeButton = document.querySelector('nav .button');
const navLinks = document.querySelectorAll('a');
const header = document.querySelector('header');
const codeImage = document.querySelector('.code-image');

document.querySelector('button').addEventListener('click', () => {
  if (theme === 'light') {
    body.classList.add('body-dark-theme');
    themeButton.textContent = 'Light Theme';
    themeButton.classList.add('button-dark-theme');
    navLinks.forEach(link => {
      link.classList.add('nav-link-dark-theme');
    });
    header.classList.add('header-dark-theme');
    codeImage.classList.add('code-image-dark-theme');

    theme = 'dark';
  } else {
    body.classList.remove('body-dark-theme');
    themeButton.textContent = 'Dark Theme';
    themeButton.classList.remove('button-dark-theme');
    navLinks.forEach(link => {
      link.classList.remove('nav-link-dark-theme');
    });
    header.classList.remove('header-dark-theme');
    codeImage.classList.remove('code-image-dark-theme');

    theme = 'light';
  }
});
