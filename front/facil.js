// Seleciona o container das cartas e o botão de reiniciar jogo
const container = document.querySelector(".container");
const botaoReiniciar = document.querySelector("#reiniciar");

let cartas; // Variável para armazenar as cartas do jogo
let primeiraCarta = ""; // Armazena a primeira carta clicada
let segundaCarta = ""; // Armazena a segunda carta clicada

// Adiciona um evento de clique ao botão de reiniciar o jogo
botaoReiniciar.addEventListener("click", reiniciarJogo);

// Array de objetos representando os itens (animais) do jogo
let items = [
  { nome: "gato", imagem: "imagem/gato.jpg" },
  { nome: "cachorro", imagem: "imagem/cachorro.jpg" },
  { nome: "coelho", imagem: "imagem/coelho.jpg" },
  { nome: "elefante", imagem: "imagem/elefante.jpg" },
  { nome: "girafa", imagem: "imagem/girafa.jpg" },
  { nome: "leao", imagem: "imagem/leao.jpg" },
  { nome: "panda", imagem: "imagem/panda.jpg" },
  { nome: "tigre", imagem: "imagem/tigre.jpg" },
];

// Função para criar as cartas do jogo
function criarCartas() {
  let itemsDuplicados = [...items, ...items]; // Duplica os itens para criar pares
  let animais = itemsDuplicados.sort(() => Math.random() - 0.5); // Embaralha os itens

  container.innerHTML = ""; // Limpa as cartas existentes no container
  animais.forEach((animal) => {
    // Adiciona cada carta ao container com a frente e o verso
    container.innerHTML += `
      <div class="carta" data-carta="${animal.nome}">
        <div class="atras">?</div>
        <div class="frente">
          <img src="${animal.imagem}" width="180px" height="180px" />
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
  const primeiroAnimal = primeiraCarta.getAttribute("data-carta");
  const segundoAnimal = segundaCarta.getAttribute("data-carta");

  // Se os animais são iguais, mantém as cartas viradas
  if (primeiroAnimal === segundoAnimal) {
    primeiraCarta = "";
    segundaCarta = "";
  } else {
    // Se os animais não são iguais, desvira as cartas após 600ms
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

// Começa o jogo assim que a página carrega
criarCartas();
