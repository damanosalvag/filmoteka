import { getGenres } from './request-api';
const w = 'watched';

export function setWatched(id) {
  let ids = [];
  let encontrado = 0;
  if (JSON.parse(localStorage.getItem(w)) === null) {
    localStorage.setItem(w, id.toString());
  } else {
    let getId = JSON.parse(localStorage.getItem(w));
    console.log(getId.length);
    if (getId.length > 1) {
      for (const bus of getId) {
        if (id == bus) {
          encontrado = 1;
        }
      }
    } else {
      if (id == getId) {
        encontrado = 1;
      }
    }
    if (encontrado == 0) {
      if (getId.length > 1) {
        for (const id of getId) {
          ids.push(id);
        }
      } else {
        ids.push(getId);
      }
      ids.push(id);
      localStorage.setItem(w, JSON.stringify(ids));
    } else {
      alert('La pelicula se encuentra añadida');
    }
  }
}

export function setQueue(id) {
  let ids = [];
  let encontrado = 0;
  if (JSON.parse(localStorage.getItem('queue')) === null) {
    localStorage.setItem('queue', id.toString());
    console.log('Listo el Primero');
  } else {
    let getId = JSON.parse(localStorage.getItem('queue'));
    if (getId.length > 1) {
      for (const bus of getId) {
        if (id == bus) {
          encontrado = 1;
        }
      }
    } else {
      if (id == getId) {
        encontrado = 1;
      }
    }
    if (encontrado == 0) {
      if (getId.length > 1) {
        for (const id of getId) {
          ids.push(id);
        }
        console.log(getId.length);
      } else {
        ids.push(getId);
      }
      ids.push(id);
      localStorage.setItem('queue', JSON.stringify(ids));
    } else {
      alert('La pelicula se encuentra añadida');
    }
  }
}

export function getWatched() {
  let result;
  if (localStorage.getItem(w) != null) {
    result = JSON.parse(localStorage.getItem(w));
  } else {
    result = null;
  }
  return result;
}

export function getQueue() {
  let result;
  if (localStorage.getItem('queue') != null) {
    result = JSON.parse(localStorage.getItem('queue'));
  } else {
    result = null;
  }
  return result;
}

export function getGenre(rengers) {
  let result = '';
  let i = 0;
  if (rengers.length > 1) {
    for (const renger of rengers) {
      result += renger.name + ' ';
      if (i == 3) {
        break;
      }
    }
  } else {
    result += rengers.name + ' ';
  }

  return result;
}

export function deletechildrens(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
}

export function searchId(id, index) {
  let encontrado = false;
  let result = JSON.parse(localStorage.getItem(index));
  if (result != null) {
    if (result.length > 1) {
      encontrado = result.includes(id);
    } else {
      if (result == id) {
        encontrado = true;
      }
    }
  }
  return encontrado;
}

export function removeQueue(id) {
  let ids = [];
  let getId = JSON.parse(localStorage.getItem('queue'));
  if (getId.length > 1) {
    console.log(id);
    for (const is of getId) {
      if (is != id) {
        ids.push(is);
      }
    }
    localStorage.setItem('queue', JSON.stringify(ids));
  } else {
    if (getId == id) {
      localStorage.removeItem('queue');
      console.log(getId, id);
    } else {
      ids.push(getId);
    }
  }
}

export function removeWatched(id) {
  let ids = [];
  let getId = JSON.parse(localStorage.getItem(w));
  if (getId.length > 1) {
    console.log(id);
    for (const is of getId) {
      if (is != id) {
        ids.push(is);
      }
    }
    localStorage.setItem(w, JSON.stringify(ids));
  } else {
    if (getId == id) {
      localStorage.removeItem(w);
      console.log(getId, id);
    } else {
      ids.push(getId);
    }
  }
}
