// Seleciona os elementos principais
const colorButtons = document.querySelectorAll(".color-button");
const startButton = document.getElementById("start-button");
const jogosButton = document.getElementById("jogos");
const message = document.getElementById("message");

let sequence = []; // Sequência gerada pelo jogo
let playerSequence = []; // Sequência que o jogador tenta reproduzir
let level = 0; // Nível atual do jogo

// Evento para iniciar o jogo
startButton.addEventListener("click", startGame);

// Evento para voltar à página de jogos
jogosButton.addEventListener("click", () => {
    window.location.href = "jogos.html";
});

// Associa o evento de clique a cada botão de cor
colorButtons.forEach((button) => {
    button.addEventListener("click", (e) => handlePlayerInput(e.target.id));
});

// Inicia o jogo, resetando a sequência e nível
function startGame() {
    sequence = [];
    playerSequence = [];
    level = 0;
    message.textContent = "Observe a sequência...";
    nextRound();
}

// Avança para a próxima rodada, aumentando a sequência
function nextRound() {
    level++;
    playerSequence = [];
    message.textContent = `Nível ${level}`;

    const randomColor = getRandomColor();
    sequence.push(randomColor);

    // Mostra a sequência ao jogador
    showSequence();
}

// Gera uma cor aleatória para adicionar à sequência
function getRandomColor() {
    const colors = ["green", "red", "yellow", "blue"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Exibe a sequência para o jogador
function showSequence() {
    let delay = 0;

    sequence.forEach((color) => {
        setTimeout(() => {
            activateColor(color);
        }, delay);
        delay += 600;
    });

    // Permite a interação do jogador após exibir a sequência
    setTimeout(() => {
        message.textContent = "Repita a sequência!";
    }, delay);
}

// Destaca brevemente a cor selecionada na sequência
function activateColor(color) {
    const button = document.getElementById(color);
    button.classList.add("active");

    setTimeout(() => {
        button.classList.remove("active");
    }, 300);
}

// Lida com o clique do jogador e verifica a sequência
function handlePlayerInput(color) {
    playerSequence.push(color);
    activateColor(color);

    // Verifica a sequência do jogador após cada clique
    if (!checkPlayerSequence()) {
        message.textContent = "Erro! Tente novamente.";
        startButton.disabled = false; // Reativa o botão Iniciar
        return;
    }

    // Se o jogador completou a sequência corretamente
    if (playerSequence.length === sequence.length) {
        message.textContent = "Muito bem! Prepare-se para o próximo nível...";
        setTimeout(() => nextRound(), 1000);
    }
}

// Verifica se a sequência do jogador está correta até o momento
function checkPlayerSequence() {
    for (let i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] !== sequence[i]) {
            return false;
        }
    }
    return true;
}
