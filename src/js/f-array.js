import { varDOM } from "./var-selector-dom";
import { getAPI } from "./request-api";
import { renderPost } from "./renderPost";
import { detailsMovieValues } from './modal-movie-details';
import { paginationButtons, renderPerPage } from "./pagination";

const { modalContainer, movieName } = varDOM

export let currentPage = 1;
export let allPages = 0;

// Process function for array movies
export async function moviesArraytoRender(arrayAPI) {
  const { page, results, total_pages } = arrayAPI.data;
  currentPage = page;
  allPages = total_pages;
  
  const moviePromises = results.map(async ({ id }) => {
    const movieDetail = await getAPI.detailMovie(id);
    return movieDetail;
  });

  const moviesIdSearch = await Promise.all(moviePromises);
  return moviesIdSearch;
}

// Validation function
export function validations(obj_movie) {
  let genresAll = "";
  let genresOthers = "";
  let rel_year = "";
  try {
    rel_year = obj_movie.release_date;
  } catch {
    rel_year = obj_movie.first_air_date;
  }
  let dataResults = {};
    const { id, poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview} = obj_movie;
// Genres validations    
    try {
        genres.forEach((genre, index) => {
            genresAll += `${genre.name} | `;
            if (index < 2) {
                genresOthers += `${genre.name}, `
            }
        })       
    } catch (error) {
        genresAll = 'Undefined genre';
        genresOthers = 'Undefined genre';
    }
// Poster validation
    const poster = poster_path === null ? varDOM.defaultPoster : `https://image.tmdb.org/t/p/w500${poster_path}`;
// Year validation
    const year_ = (rel_year ?? "2023") || "2023";
    const date_year = year_.slice(0, 4);

  return dataResults = {
    id_: id,
    title_: title,
    vote_count_: vote_count,
    popularity_: popularity,
    original_title_: original_title,
    overview_: overview,
    vote_average_: vote_average.toFixed(1),
        genres: {
            all: genresAll,
            others: `${genresOthers} Others`
        },
        poster_: poster,
        year: date_year
    }
}
// Function render async
export async function renderPostAsync(data) {
  return new Promise(resolve => {
    const renderedHTML = renderPost(data);
    resolve(renderedHTML);
  });
}
//Function inicial
function modalListener () {
    const detail_movie = document.querySelectorAll('.movie-card');
  //Event click open movie details by class .movie-card
  detail_movie.forEach(movie => {
    const id_movie = movie.querySelector('a');
    movie.addEventListener('click', () => {
      modalContainer.style.display = 'block';
      detailsMovieValues(id_movie.dataset.id);
    });
  });
}
// Function movie trend
export async function renderMoviesTrend(page) {
  // call to api rest
  const postTrending = await getAPI.trendMovies(page);
  // render figure markup with the movies
  await renderPostAsync(postTrending);
  // call listener event to figure markup
    modalListener();
    paginationButtons();

}
export async function renderMoviesSearch(page) {
    if (movieName.value != '') {
        const posts = await getAPI.movies(movieName.value.trim(), page);
        console.log(posts.data.total_results);
        if (posts.data.total_results >= 1) {
        await renderPostAsync(posts);
        // Rendering pagination buttons
        paginationButtons();
        // Rendering photocards per paginations numbers buttons
        // Element selector by class .movie-card
        modalListener();
    } else {
      error.innerHTML = 'No se encontraron Resultados';
    }
  } else {
    return window.alert('Please write something!');
  }
}
