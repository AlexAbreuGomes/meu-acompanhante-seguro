
document.addEventListener("DOMContentLoaded", function() {
    const toggleDarkModeButton = document.getElementById('modoEscuro');
    const body = document.body;

    // Verifica se o modo escuro está ativado ao carregar a página
    if (localStorage.getItem('modoEscuro') === 'true') {
        body.classList.add('dark');
    }

    toggleDarkModeButton.addEventListener('click', () => {
        // Alterna a classe 'dark' no body ao clicar no botão
        body.classList.toggle('dark');

        // Salva o estado do modo escuro no localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('modoEscuro', 'true');
        } else {
            localStorage.setItem('modoEscuro', 'false');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let synth = window.speechSynthesis;
    let isSpeaking = false;
    let currentUtterance = null;

    let playPauseButtons = document.querySelectorAll('.playPauseBtn');

    playPauseButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (isSpeaking) {
                synth.cancel();
                playPauseButtons.forEach(btn => btn.textContent = 'Ouvir');
                isSpeaking = false;
            } else {
                let aviso = button.closest('.aviso') || 
                            button.closest('.orientacoesTexto') || 
                            button.closest('.tituloOrientacoes');
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
            button.textContent = 'Ouvir';
            isSpeaking = false;
        };
        synth.speak(utterance);
        button.textContent = 'Parar';
        isSpeaking = true;
        currentUtterance = utterance;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const botaoMaisFonte = document.getElementById('fonteMais');
    const botaoMenosFonte = document.getElementById('fonteMenos');
    const body = document.body;

    const tamanhoOriginal = parseFloat(getComputedStyle(body).fontSize);

    botaoMaisFonte.addEventListener('click', function(event) {
        event.preventDefault();
        let currentFontSize = parseFloat(getComputedStyle(body).fontSize);
        let novoTamanho = currentFontSize * 1.3; // Aumenta em 30%

        if (novoTamanho > tamanhoOriginal * 1.4) { // Limita a 140% do original
            novoTamanho = tamanhoOriginal * 1.4;
        }

        body.style.fontSize = novoTamanho + 'px';
    });

    botaoMenosFonte.addEventListener('click', function(event) {
        event.preventDefault();
        let currentFontSize = parseFloat(getComputedStyle(body).fontSize);
        let novoTamanho = currentFontSize * 0.7; // Diminui em 30%

        if (novoTamanho < tamanhoOriginal * 0.9) { // Limita a 90% do original
            novoTamanho = tamanhoOriginal * 0.9;
        }

        body.style.fontSize = novoTamanho + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.orientacoesTexto p');
    const charLimit = 200; // Limite de caracteres

    textElements.forEach(element => {
        let originalText = element.innerText;
        if (originalText.length > charLimit) {
            let truncatedText = originalText.substring(0, charLimit) + '...';
            element.innerText = truncatedText;
        }
    });
});





