import { getAPI } from './request-api';
import { total_pgs, renderPost, pageNow } from './renderPost';
import { varDOM } from './var-selector-dom';
import { detailsMovieValues } from './modal-movie-details';
import { currentPage, allPages, renderMoviesSearch, renderMoviesTrend } from './f-array';

export let varPages = {
  listPages: document.getElementById('pages-list'),
};

export function paginationButtons() {
  let markup = '';
  let limitInf = 3;
  let limitSup = allPages - 2;
  

  switch (true) {
    case currentPage <= limitInf:
      for (let i = 1; i <= 5; i++) {
        markup += `<li><button id="num-page-btn">${i}</button></li>`;
      }
      markup += `<li>...</li>
            <li><button id="num-page-btn">${allPages}</button></li>`;
      varPages.listPages.innerHTML = markup;
      break;
    case currentPage >= limitSup:
      markup += `<li><button id="num-page-btn">1</button></li><li>...</li>`;
      for (let i = currentPage-2; i <= allPages; i++) {
        markup += `<li><button id="num-page-btn">${i}</button></li>`;
      }
      varPages.listPages.innerHTML = markup;
      break;
    case currentPage > limitInf && currentPage < limitSup:
      markup += `<li><button id="num-page-btn">1</button></li><li>...</li>`;
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        markup += `<li><button id="num-page-btn">${i}</button></li>`;
      }
      markup += `<li>...</li>
            <li><button id="num-page-btn">${allPages}</button></li>`;
      varPages.listPages.innerHTML = markup;
      break;
    default:
      console.log('Caso no reconocido');
      break;
  }
}


export function renderPerPage(e) {

      const page = e.target;
      const pgBack = currentPage <= 1 ? currentPage : currentPage - 1;
      const pgAdv = currentPage >= allPages ? allPages : currentPage+1;
      switch (true) {
        case page && page.matches('#num-page-btn'):
          if (varDOM.movieName.value === '') {
            renderMoviesTrend(page.textContent);
          } else {
            renderMoviesSearch(page.textContent);
          }
          break;
        case page && page.matches('#pg-back-btn'):
          if (varDOM.movieName.value === '') {
            renderMoviesTrend(pgBack);
          } else {
            renderMoviesSearch(pgBack);
          }          
          break;
        case page && page.matches('#pg-advance-btn'):
          if (varDOM.movieName.value === '') {
            renderMoviesTrend(pgAdv);
          } else {
            renderMoviesSearch(pgAdv);
          }
          break;
        default:
          renderMoviesTrend(1);
          break;
      }

}

