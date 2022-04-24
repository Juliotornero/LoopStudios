const iopen = document.querySelector('.menu');
const iclose = document.querySelector('.cerrar');
const navegador = document.querySelector('.navegador');

function abrir(){
    iopen.classList.add('show');
    iclose.classList.remove('show');
    navegador.classList.remove('show');
    document.body.style.overflow = 'hidden';
}

function cerrar(){
    iclose.classList.add('show');
    iopen.classList.remove('show');
    navegador.classList.add('show');
    document.body.style.overflow = 'scroll';
}



// overflow-y:hidden;