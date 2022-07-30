let theme = 'light';
const body = document.querySelector('body');
const themeButton = document.querySelector('nav .button');
const buttons = document.querySelectorAll('.button');
const navLinks = document.querySelectorAll('nav a');
const header = document.querySelector('header');
const codeImage = document.querySelector('.code-image');
const projects = document.querySelectorAll('.project');
const projectDescriptions = document.querySelectorAll('.project p');
const footer = document.querySelector('footer');
const contactIcons = document.querySelectorAll('.contact-icon');

document.querySelector('button').addEventListener('click', () => {
  if (theme === 'light') {
    body.classList.add('body-dark-theme');
    themeButton.textContent = 'Light Theme';
    themeButton.classList.add('button-dark-theme');
    buttons.forEach(button => button.classList.add('button-dark-theme'));
    navLinks.forEach(link => link.classList.add('nav-link-dark-theme'));
    header.classList.add('header-dark-theme');
    codeImage.classList.add('code-image-dark-theme');
    projects.forEach(project => project.classList.add('project-dark-theme'));
    projectDescriptions.forEach(projectDescription => projectDescription.classList.add('project-description-dark-theme'));
    footer.classList.add('footer-dark-theme');
    contactIcons.forEach(icon => icon.classList.add('contact-icon-dark-theme'));

    theme = 'dark';
  } else {
    body.classList.remove('body-dark-theme');
    themeButton.textContent = 'Dark Theme';
    themeButton.classList.remove('button-dark-theme');
    buttons.forEach(button => button.classList.remove('button-dark-theme'));
    navLinks.forEach(link => link.classList.remove('nav-link-dark-theme'));
    header.classList.remove('header-dark-theme');
    codeImage.classList.remove('code-image-dark-theme');
    projects.forEach(project => project.classList.remove('project-dark-theme'));
    projectDescriptions.forEach(projectDescription => projectDescription.classList.remove('project-description-dark-theme'));
    footer.classList.remove('footer-dark-theme');
    contactIcons.forEach(icon => icon.classList.remove('contact-icon-dark-theme'));

    theme = 'light';
  }
});
