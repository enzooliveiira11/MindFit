// Seleciona o container das cartas e o botão de reiniciar jogo
const container = document.querySelector(".container");
const botaoReiniciar = document.querySelector("#reiniciar");

let cartas; // Variável para armazenar as cartas do jogo
let primeiraCarta = ""; // Armazena a primeira carta clicada
let segundaCarta = ""; // Armazena a segunda carta clicada

// Adiciona um evento de clique ao botão de reiniciar o jogo
botaoReiniciar.addEventListener("click", reiniciarJogo);

// Array de objetos representando os itens (números) do jogo
let items = [
  { nome: "1", imagem: "../assets/images/memory-game/1.jpg" },
  { nome: "2", imagem: "../assets/images/memory-game/2.jpg" },
  { nome: "3", imagem: "../assets/images/memory-game/3.jpg" },
  { nome: "4", imagem: "../assets/images/memory-game/4.jpg" },
  { nome: "5", imagem: "../assets/images/memory-game/5.jpg" },
  { nome: "6", imagem: "../assets/images/memory-game/6.jpg" },
  { nome: "7", imagem: "../assets/images/memory-game/7.jpg" },
  { nome: "8", imagem: "../assets/images/memory-game/8.jpg" },
];

// Função para criar as cartas do jogo
function criarCartas() {
  let itemsDuplicados = [...items, ...items]; // Duplica os itens para criar pares
  let numeros = itemsDuplicados.sort(() => Math.random() - 0.5); // Embaralha os itens

  container.innerHTML = ""; // Limpa as cartas existentes no container
  numeros.forEach((numero) => {
    // Adiciona cada carta ao container com a frente e o verso
    container.innerHTML += `
      <div class="carta" data-carta="${numero.nome}">
        <div class="atras">?</div>
        <div class="frente">
          <img src="${numero.imagem}" width="180px" height="180px" />
        </div>
      </div>
    `;
  });

  virarCarta(); // Chama a função para adicionar o evento de virar cartas
}

// Função para adicionar o evento de virar cartas
function virarCarta() {
  cartas = document.querySelectorAll(".carta"); // Seleciona todas as cartas

  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      // Se não houver carta virada, vira a primeira carta
      if (primeiraCarta === "") {
        carta.classList.add("carta-virada");
        primeiraCarta = carta;
        // Se a primeira carta já estiver virada, vira a segunda carta e verifica se são iguais
      } else if (segundaCarta === "") {
        carta.classList.add("carta-virada");
        segundaCarta = carta;
        checarCartas(); // Verifica se as cartas são iguais
      }
    });
  });
}

// Função para verificar se as cartas viradas são iguais
function checarCartas() {
  const primeiroNumero = primeiraCarta.getAttribute("data-carta");
  const segundoNumero = segundaCarta.getAttribute("data-carta");

  // Se os números são iguais, mantém as cartas viradas
  if (primeiroNumero === segundoNumero) {
    primeiraCarta = "";
    segundaCarta = "";
  } else {
    // Se os números não são iguais, desvira as cartas após 600ms
    setTimeout(() => {
      primeiraCarta.classList.remove("carta-virada");
      segundaCarta.classList.remove("carta-virada");

      primeiraCarta = "";
      segundaCarta = "";
    }, 600);
  }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  primeiraCarta = "";
  segundaCarta = "";
  criarCartas(); // Cria as cartas novamente, reiniciando o jogo
}

// Função para redirecionar para a página de jogos
document.getElementById("jogos").addEventListener("click", function () {
  window.location.href = "jogos.html";
});

// Começa o jogo assim que a página carrega
criarCartas();
