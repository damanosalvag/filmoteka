import { varDOM } from "./var-selector-dom";


// Función para mostrar u ocultar el SVG según la posición de desplazamiento
export let scrollTop = () => {
  // Get scroll position
  if (document.documentElement.scrollTop > window.innerHeight) {
    varDOM.scrollTopBtn.classList.add('show');
  } else {
    varDOM.scrollTopBtn.classList.remove('show');
  }
};

