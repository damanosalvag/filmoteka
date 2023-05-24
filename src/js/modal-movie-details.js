import { varDOM } from "./var-selector-dom";
import { getAPI } from "./request-api";
import { validations, id_global } from "./f-array";
import { addIdStorage } from "./localStorage";


const {
    modalContainer, modalImgPoster, modalCloseBtn,
    modalTitle, modalInfoValues, modalDescMovie,
    modalWatchedBtn, modalQueueBtn, addBtnContainer
} = varDOM;
export let addWyQ = (event) => {
    addIdStorage(id_global, event)
};

export async function detailsMovieValues(id_movie) {
    const movieInfoObj = await getAPI.detailMovie(id_movie);
    
    const data = validations(movieInfoObj.data)

    const { id_, title_, vote_average_, genres, poster_, year, original_title_, vote_count_, overview_, popularity_ } = data;

    //image poster
    modalImgPoster.src = poster_;
    // title movie
    modalTitle.textContent = title_;
    // film values
    const markup = `
        <li><span class="film-info_vote">${vote_average_}</span> / <span class="film-info_count">${vote_count_}</span></li>
        <li>${popularity_}</li>
        <li>${original_title_}</li>
        <li>${genres.all}</li>`;
    modalInfoValues.innerHTML = markup;
    // Description
    modalDescMovie.textContent = overview_;
    // Add id storage
    addBtnContainer.addEventListener('click', addWyQ, true);

}

