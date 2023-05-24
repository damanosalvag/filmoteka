import { varDOM } from "./var-selector-dom";
 
const {watchedStorage, queueStorage, modalWatchedBtn, modalQueueBtn } = varDOM;

export function addIdStorage(id, event) {
    switch (true) {
        case event.target && event.target.matches('#watch-button'):
            if (event.target.textContent === 'ADD TO WATCHED') {
                const jsonWatchedAdd = JSON.parse(watchedStorage);
                jsonWatchedAdd.push(parseInt(id));
                const updatedJsonWatched = JSON.stringify(jsonWatchedAdd);
                localStorage.setItem('watched', updatedJsonWatched);
                modalWatchedBtn.textContent = 'REMOVE FROM WATCHED';
                console.log(`Id watched agregado: ${id}`);
            } else {
                const jsonWatchedRemove = JSON.parse(watchedStorage);
                const position = jsonWatchedRemove.indexOf(parseInt(id));
                jsonWatchedRemove.splice(position, 1);
                const updatedJsonWatched_ = JSON.stringify(jsonWatchedRemove);
                localStorage.setItem('watched', updatedJsonWatched_);
                modalWatchedBtn.textContent = 'ADD TO WATCHED';
                console.log(`Id watched removido: ${id}`)
            }
        break;   
        case event.target && event.target.matches('#queue-button'):
            if (event.target.textContent === 'ADD TO QUEUE') {
                const jsonQueue = JSON.parse(queueStorage);
                jsonQueue.push(parseInt(id));
                const updatedJsonQueue = JSON.stringify(jsonQueue);
                localStorage.setItem('queue', updatedJsonQueue);
                modalQueueBtn.textContent = 'REMOVE FROM QUEUE';
                console.log(`Id queue agregado: ${id}`)
            } else {
                const jsonQueueRemove = JSON.parse(queueStorage);
                const position = jsonQueueRemove.indexOf(id);
                jsonQueueRemove.splice(position, 1);
                const updatedJsonQueue_ = JSON.stringify(jsonQueueRemove);
                localStorage.setItem('queue', updatedJsonQueue_);
                modalQueueBtn.textContent = 'ADD TO QUEUE';
                console.log(`Id queue agregado: ${id}`)
            }
        break;

        default:
            console.log(`No paso nada`)
        break;
    }    
   
}

export function testLocalStorage() {
    const jsonDataW = localStorage.getItem('watched');
    const jsonDataQ = localStorage.getItem('queue');

  if (jsonDataW && jsonDataQ) {
    // Hay un JSON almacenado en el Local Storage
    console.log('Se encontró un JSON en el Local Storage');
    // Realiza aquí las acciones que necesites con el JSON
  } else {
    // No se encontró ningún JSON en el Local Storage
      const watched = [];
      const queue = [];
      const theme = 'dark';
      localStorage.setItem('watched', JSON.stringify(watched));
      localStorage.setItem('queue', JSON.stringify(queue));
      localStorage.setItem('theme', JSON.stringify(theme));
  }
}

export function validationIdStorage(id_mov) {
    const watched = JSON.parse(watchedStorage).includes(parseInt(id_mov));
    const queue = JSON.parse(queueStorage).includes(parseInt(id_mov));
    if (watched) {
        modalWatchedBtn.textContent = 'REMOVE FROM WATCHED';
    } else {
        modalWatchedBtn.textContent = 'ADD TO WATCHED';
    }
    if (queue) {
        modalQueueBtn.textContent = 'REMOVE FROM QUEUE';
    } else {
        modalQueueBtn.textContent = 'ADD TO QUEUE';
    }
};































// import { getGenres } from "./request-api";

// export function setWatched(id){
//     let ids = [];    
//     let encontrado = 0;
//     if(JSON.parse(localStorage.getItem('Watched'))  === null){
//         localStorage.setItem('Watched', id.toString());        
//     }else{
//         let getId =JSON.parse(localStorage.getItem('Watched'));  
//         console.log(getId.length);
//         if(getId.length > 1){
//             for (const bus of getId) {
//                 if(id == bus){
//                     encontrado = 1;
//                 }
//             }                       
//         }else{
//             if(id == getId){
//                 encontrado = 1                
//             } 
//         }
//         if(encontrado == 0){            
//             if(getId.length > 1){            
//                 for (const id of getId) {                   
//                     ids.push(id);
//                 }               
//             }else{
//                 ids.push(getId);                
//             }                 
//             ids.push(id);
//             localStorage.setItem('Watched', JSON.stringify(ids));
//         }else{
//             alert("La pelicula se encuentra añadida");
//         }
       
//     }
    
// }

// export function setQueue(id){   
//     let ids = [];   
//     let encontrado = 0; 
//     if((JSON.parse(localStorage.getItem('Queue')))  === null){
//         localStorage.setItem('Queue', id.toString());
//         console.log('Listo el Primero');
//     }else{
//         let getId =JSON.parse(localStorage.getItem('Queue')); 
//         if(getId.length > 1){
//             for (const bus of getId) {
//                 if(id == bus){
//                     encontrado = 1;
//                 }
//             }                       
//         }else{
//             if(id == getId){
//                 encontrado = 1
//             } 
//         } 
//         if(encontrado == 0){ 
//             if(getId.length > 1){            
//                 for (const id of getId) {
//                     ids.push(id);
//                 }
//                 console.log(getId.length);
//             }else{
//                 ids.push(getId);
                
//             }                 
//             ids.push(id);
//             localStorage.setItem('Queue', JSON.stringify(ids));
//         } else{
//             alert("La pelicula se encuentra añadida");
//         }     
        
//     }
// }

// export function getWatched(){
//     let result;
//     if(localStorage.getItem('Watched') != null){
//         result = JSON.parse(localStorage.getItem('Watched'));
//     }else{
//         result = null;
//     }
//     return result;
// }

// export function getQueue(){
//     let result;
//     if(localStorage.getItem('Queue') != null){
//         result = JSON.parse(localStorage.getItem('Queue'));
//     }else{
//         result = null;
//     }
//     return result;
// }

// export function getGenre(rengers){
//     let result = "";   
//     let i = 0;
//     if(rengers.length > 1){
//         for (const renger of rengers) {        
//             result += renger.name+" ";  
//             if(i == 3) {
//                 break;
//             }    
//         }
//     }else{
//         result += rengers.name+" "
//     }
        
//     return result;
// }

// export function deletechildrens(element){
//     while(element.hasChildNodes()){
//         element.removeChild(element.firstChild);	
//    }
// }

// export function searchId(id, index){
//    let encontrado = false;
//    let result = JSON.parse(localStorage.getItem(index));
//    if(result != null){
//     if(result.length > 1){
//         encontrado = result.includes(id);
//     }else{
//         if (result == id) {
//             encontrado = true;
//         }
//     }
//    }
//    return encontrado;
// }

// export function removeQueue(id){
//     let ids = [];
//     let getId = JSON.parse(localStorage.getItem('Queue'));    
//     if(getId.length > 1){
//         console.log(id)
//         for (const is of getId) {
//             if(is != id){
//                 ids.push(is);
                
//             }
//         }
//         localStorage.setItem('Queue', JSON.stringify(ids));
//     }else{
//         if(getId == id){
//             localStorage.removeItem('Queue');
//             console.log(getId, id);
//         }else{
//             ids.push(getId);
//         }
//     }    
// }

// export function removeWatched(id){
//     let ids = [];
//     let getId = JSON.parse(localStorage.getItem('Watched'));    
//     if(getId.length > 1){
//         console.log(id)
//         for (const is of getId) {
//             if(is != id){
//                 ids.push(is);                
//             }
//         }
//         localStorage.setItem('Watched', JSON.stringify(ids));
//     }else{
//         if(getId == id){
//             localStorage.removeItem('Watched');
//             console.log(getId, id);
//         }else{
//             ids.push(getId);
//         }
//     }    
// }


