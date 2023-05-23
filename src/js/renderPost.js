// import genresList from './genres';
import { varDOM } from "./var-selector-dom";
import { getGenre } from "./localStorage";
import { moviesArraytoRender, validations } from "./f-array";

let count = 0;
export let total_pgs, pageNow = 0;

export async function renderPost(posts) {
    try {
        const moviesArray = await moviesArraytoRender(posts);
        const filterMovies = moviesArray.filter(objeto => objeto !== undefined);
        const movies = filterMovies.length > 9 ? filterMovies.slice(0, 9) : filterMovies;
        const markup = movies.map( (movie) => {            
            const movieData = validations(movie.data);
            const { id_, title_, vote_average_, genres, poster_, year } = movieData;
            return `
            <figure class="movie-card" id="movie-detail">
                <a class="poster-large" data-id="${id_}" href="#">
                    <img id="image" class='gallery__image' src="${poster_}" alt="${title_}" loading="lazy" />
                </a>
                <figcaption class="info">
                    <h3 class="card-movie-title">${title_.toUpperCase()}</h3>
                    <div class="info-items">
                        <p class="info-item">
                            ${genres.others}
                        </p>
                        <p class="info-item">
                            | ${year}
                        </p>
                        <p class="info-item addBorder">
                            ${vote_average_}
                        </p>
                    </div>

                 </figcaption>
            </figure>`
        }).join(' ');
        varDOM.filmsRender.innerHTML = markup;

    }
    catch (error){
        return console.log(error);
    }
}

export function printCard(results){
    let insertCard = "";

    const baseImageUrl = 'https://image.tmdb.org/t/p/'
    let genres = getGenre(results.genres);
    let year = results.release_date.split('-');
   
    insertCard = `
                    <figure class="movie-card" id="movie-detail">
                        <a class="poster-large" data-id="" href="#">
                            <img class='gallery__image' src="${baseImageUrl}w300${results.poster_path}" alt="${results.tittle}" loading="lazy"  data-id="${results.id}"/>
                        </a>
                        <figcaption class="info">
                            <h3 class="card-movie-title">${
                              results.original_title
                            }</h3>
                            <div class="info-items">
                                <p class="info-item">
                                    ${genres}
                                </p>
                                <p class="info-item">
                                   |  ${year[0]}
                                </p>
                                <p class="info-item">
                                    ${results.vote_average.toFixed(1)}
                                </p>
                            </div>

                        </figcaption>
                    </figure>`;
    

    return insertCard;
}



