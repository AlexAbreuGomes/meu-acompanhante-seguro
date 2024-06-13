const modoEscuro = document.getElementById('modoEscuro');
const body = document.querySelector('body');

modoEscuro.addEventListener('click', ()=>{
    modoEscuro.classList.toggle('dark')
    body.classList.toggle('dark')
    console.log('botao clicado')
});

let isSpeaking = false;
let utterance;

function lerTexto(idSecao) {
    if (isSpeaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
    } else {
        let textoElement;
        if (idSecao === 'aviso') {
            textoElement = document.getElementById(idSecao).querySelector('h2').textContent;
        } else {
            textoElement = document.getElementById(idSecao).querySelector('.orientacoesTexto').textContent;
        }
        utterance = new SpeechSynthesisUtterance(textoElement);
        speechSynthesis.speak(utterance);
        isSpeaking = true;
        utterance.onend = () => {
            isSpeaking = false;
        };
    }
}
   // Adiciona evento de clique às imagens de áudio
document.getElementById('audio').addEventListener('click', () => lerTexto('aviso'));
document.getElementById('audio02').addEventListener('click', () => lerTexto('texto01'));
document.getElementById('audio03').addEventListener('click', () => lerTexto('texto02'));
document.getElementById('audio04').addEventListener('click', () => lerTexto('texto03'));
document.getElementById('audio05').addEventListener('click', () => lerTexto('texto04'));