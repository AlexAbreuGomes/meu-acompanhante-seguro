const modoEscuro = document.getElementById('modoEscuro');
const body = document.querySelector('body');

modoEscuro.addEventListener('click', ()=>{
    modoEscuro.classList.toggle('dark')
    body.classList.toggle('dark')
    console.log('botao clicado')
});

let botaoMaisFonte = document.getElementById('fonte-mais')
let botaoMenosFonte = document.getElementById('fonte-menos')

botaoMaisFonte.addEventListener('click', function() {
    document.body.style.fontSize = '130%'
})

botaoMenosFonte.addEventListener('click', function() {
    document.body.style.fontSize = '100%'
})