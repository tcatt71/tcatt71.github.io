let theme = 'light';
const body = document.querySelector('body');
const themeButton = document.querySelector('nav .button');
const navLinks = document.querySelectorAll('a');

function onMouseEnterDarkTheme() {
  themeButton.style.color = '#000';
  themeButton.style.backgroundColor = '#a6a8d7';
}

function onMouseLeaveDarkTheme() {
  themeButton.style.color = '#000';
  themeButton.style.backgroundColor = '#8ed2f5';
}

function onMouseEnterLightTheme() {
  themeButton.style.color = '#414449';
  themeButton.style.backgroundColor = '#e6eaef';
}

function onMouseLeaveLightTheme() {
  themeButton.style.color = '#e6eaef';
  themeButton.style.backgroundColor = '#34558b';
  themeButton.style.border = 'solid 0.1rem #34558b';
}

document.querySelector('button').addEventListener('click', () => {
  if (theme === 'light') {
    body.style.color = 'hsl(0, 0%, 100%, .87)';
    body.style.backgroundColor = '#121212';
    themeButton.textContent = 'Light Theme';
    themeButton.style.color = '#000';
    themeButton.style.backgroundColor = '#a6a8d7';
    themeButton.style.border = 'none';
    themeButton.addEventListener('mouseenter', onMouseEnterDarkTheme);
    themeButton.addEventListener('mouseleave', onMouseLeaveDarkTheme);
    navLinks.forEach(link => {
      link.style.color = '#8ed2f5';
      link.addEventListener('mouseenter', () => link.style.color = '#a6a8d7');
      link.addEventListener('mouseleave', () => link.style.color = '#8ed2f5');
    });

    theme = 'dark';
  } else {
    themeButton.removeEventListener('mouseenter', onMouseEnterDarkTheme);
    themeButton.removeEventListener('mouseleave', onMouseLeaveDarkTheme);
    body.style.color = '#414449';
    body.style.backgroundColor = '#e6eaef';
    themeButton.textContent = 'Dark Theme';
    themeButton.style.color = '#414449';
    themeButton.style.backgroundColor = '#e6eaef';
    themeButton.style.border = 'solid 0.1rem #34558b';
    themeButton.addEventListener('mouseleave', onMouseLeaveLightTheme);
    themeButton.addEventListener('mouseenter', onMouseEnterLightTheme);
    navLinks.forEach(link => {
      link.style.color = '#34558b';
      link.addEventListener('mouseenter', () => link.style.color = '#34558b');
      link.addEventListener('mouseleave', () => link.style.color = '#34558b');
    });

    theme = 'light';
  }
});
