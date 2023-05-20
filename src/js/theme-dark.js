import { varDOM } from "./var-selector-dom";
let theme = localStorage.getItem('ui-theme');



export function saveTheme() {
  theme = localStorage.getItem('ui-theme');
  const nameTitle = document.querySelectorAll('.card-movie-title');

  if (varDOM.checked.checked === true) {
    varDOM.bodyTheme.classList.add('body-theme');
    nameTitle.forEach(figure => figure.classList.add('dm-card-movie-title'));
  } else {
    varDOM.bodyTheme.classList.remove('body-theme');
    nameTitle.classList.remove('dm-card-movie-title');

  }
}

function onTheme() {
  theme = localStorage.getItem('ui-theme');

  if (theme === 'dark') {
    varDOM.bodyTheme.classList.remove('body-theme');
    localStorage.setItem('ui-theme', 'light');
  } else {
    varDOM.bodyTheme.classList.add('body-theme');
    localStorage.setItem('ui-theme', 'dark');
  }
}