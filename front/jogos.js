// Seleciona os elementos dos jogos e a seta de alternância
const memoriaContainer = document.getElementById("jogo-da-memoria");
const sequenciaContainer = document.getElementById("sequencia-de-cores");
const arrowToggle = document.getElementById("arrow-toggle");

// Inicializa com o jogo da memória visível
let mostrandoMemoria = true;

// Função de alternância ao clicar na seta
arrowToggle.addEventListener("click", () => {
    mostrandoMemoria = !mostrandoMemoria;

    if (mostrandoMemoria) {
        memoriaContainer.style.display = "block";
        sequenciaContainer.style.display = "none";
        arrowToggle.innerHTML = "&#9654;"; // Seta apontando para a direita
        arrowToggle.classList.remove("esquerda");
    } else {
        memoriaContainer.style.display = "none";
        sequenciaContainer.style.display = "block";
        arrowToggle.innerHTML = "&#9664;"; // Seta apontando para a esquerda
        arrowToggle.classList.add("esquerda"); // Adiciona classe para alinhar à esquerda
    }
});

