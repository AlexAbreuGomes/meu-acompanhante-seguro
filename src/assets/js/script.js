const modoEscuro = document.getElementById('modoEscuro');
const body = document.querySelector('body');
const header = document.querySelector('header');


modoEscuro.addEventListener('click', ()=>{
    modoEscuro.classList.toggle('dark')
    body.classList.toggle('dark')
    
    console.log('botao clicado')
});


