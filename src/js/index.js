import { varDOM } from './var-selector-dom';
import { renderPost, printCard, pageNow, total_pgs } from './renderPost';
import { detailsMovieValues, addWyQ } from './modal-movie-details';
import { paginationButtons, renderPerPage, renderPerPagination } from './pagination';
import { scrollTop } from './scroll-top';
import { addIdStorage, testLocalStorage } from './localStorage';
import { saveTheme, onTheme } from './theme-dark';
import { renderMoviesTrend, renderMoviesSearch, id_global } from './f-array';

const {
  movieName,
  onSearchBtn,
  modalContainer,
  modalP,
  modalCloseBtn,
  modalQueueBtn,
  modalWatchedBtn,
  buttonWatchet,
  buttonQueue,
  buttons,
  clearWatched,
  clearQueue,
  library,
  filmsRender,
  home,
  error,
  openModalFooter,
  closeModalFooter,
  modalFooter,
  scrollTopBtn,
  paginationContainer,
  addBtnContainer
} = varDOM;

const currentPage = 1;



onSearchBtn.addEventListener('click', () => {
  renderMoviesSearch(currentPage);
});


movieName.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    onSearchBtn.click();
  }
});
function remove() {
  addBtnContainer.removeEventListener('click', addWyQ, true)
}
modalCloseBtn.addEventListener('click', () => {
  remove();
  modalContainer.style.display = 'none';
});

document.getElementById('pg-controler').addEventListener('click', event => {
  renderPerPage(event);
})

document.addEventListener('DOMContentLoaded', function() {
  renderMoviesTrend(currentPage);
  testLocalStorage();
});


// Scroll button to top
window.addEventListener('scroll', scrollTop);
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Mode dark
// varDOM.checked.addEventListener('change', saveTheme);

