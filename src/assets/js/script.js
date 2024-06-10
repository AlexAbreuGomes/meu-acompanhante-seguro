const modoEscuro = document.getElementById('modoEscuro');
const body = document.querySelector('body');

modoEscuro.addEventListener('click', ()=>{
    modoEscuro.classList.toggle('dark')
    body.classList.toggle('dark')
    console.log('botao clicado')
});


