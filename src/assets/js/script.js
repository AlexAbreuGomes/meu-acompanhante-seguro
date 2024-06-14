const modoEscuro = document.getElementById('modoEscuro');
const body = document.querySelector('body');

modoEscuro.addEventListener('click', ()=>{
    modoEscuro.classList.toggle('dark')
    body.classList.toggle('dark')
    console.log('botao clicado')
});

// document.addEventListener("DOMContentLoaded", function() {
//     let synth = window.speechSynthesis;
//     let isSpeaking = false;
//     let currentUtterance = null;

//     let playPauseButtons = document.querySelectorAll('.playPauseBtn');

//     playPauseButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             if (isSpeaking) {
//                 synth.cancel();
//                 playPauseButtons.forEach(btn => btn.textContent = 'Play');
//                 isSpeaking = false;
//             } else {
//                 let aviso = button.closest('.aviso') || button.closest('.orientacoesTexto') || button.closest('titulo-login');
//                 let texto = aviso.innerText || aviso.textContent 
//                 narrarTexto(texto, button);
//             }
//         });
//     });

//     function narrarTexto(texto, button) {
//         let utterance = new SpeechSynthesisUtterance(texto);
//         utterance.lang = 'pt-BR';
//         utterance.onend = function() {
//             button.textContent = 'Play';
//             isSpeaking = false;
//         };
//         synth.speak(utterance);
//         button.textContent = 'Pause';
//         isSpeaking = true;
//         currentUtterance = utterance;
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    let synth = window.speechSynthesis;
    let isSpeaking = false;
    let currentUtterance = null;

    let playPauseButtons = document.querySelectorAll('.playPauseBtn');

    playPauseButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (isSpeaking) {
                synth.cancel();
                playPauseButtons.forEach(btn => btn.textContent = 'Play');
                isSpeaking = false;
            } else {
                let aviso = button.closest('.aviso') || 
                            button.closest('.orientacoesTexto') || 
                            button.closest('.login');
                if (aviso) { // Verifica se o elemento foi encontrado
                    let texto = aviso.innerText || aviso.textContent;
                    narrarTexto(texto, button);
                }
            }
        });
    });

    function narrarTexto(texto, button) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.onend = function() {
            button.textContent = 'Play';
            isSpeaking = false;
        };
        synth.speak(utterance);
        button.textContent = 'Pause';
        isSpeaking = true;
        currentUtterance = utterance;
    }
});

