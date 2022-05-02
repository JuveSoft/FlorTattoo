document.addEventListener('DOMContentLoaded', function() {
    iniciarProyecto();
});

function iniciarProyecto() {
    crearProyecto();
}

function crearProyecto() {
    const galeria = document.querySelector('.galeria-proyectos');
    for (let i = 1; i <= 7; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
             <source srcset="build/img/${i}.avif" type="image/avif">
             <source srcset="build/img/${i}.webp" type="image/webp">
             <img loading="lazy" width="200" height="300" src="build/img/${i}.jpg" alt="imagen galeria">
         `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    // alert('mostrando...', id);
    // console.log('mostrando...', id);
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
             <source srcset="build/img/${id}.avif" type="image/avif">
             <source srcset="build/img/${id}.webp" type="image/webp">
             <img loading="lazy" width="200" height="300" src="build/img/${id}.jpg" alt="imagen galeria">
         `;
    // Crea el Overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }
        // notón para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);
    // Añadirlo al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}