const container = document.querySelector(".container");
const botaoReiniciar = document.querySelector("#reiniciar");

let cartas; // Armazena as cartas do jogo
let primeiraCarta = ""; // Armazena a primeira carta clicada
let segundaCarta = ""; // Armazena a segunda carta clicada

botaoReiniciar.addEventListener("click", reiniciarJogo);

// Array de objetos representando os itens (números) do jogo
let items = [
  { nome: "1", imagem: "imagem/1.jpg" },
  { nome: "2", imagem: "imagem/2.jpg" },
  { nome: "3", imagem: "imagem/3.jpg" },
  { nome: "4", imagem: "imagem/4.jpg" },
  { nome: "5", imagem: "imagem/5.jpg" },
  { nome: "6", imagem: "imagem/6.jpg" },
  { nome: "7", imagem: "imagem/7.jpg" },
  { nome: "8", imagem: "imagem/8.jpg" },
  { nome: "9", imagem: "imagem/9.jpg" },
  { nome: "10", imagem: "imagem/10.jpg" },
  { nome: "11", imagem: "imagem/11.jpg" },
  { nome: "12", imagem: "imagem/12.jpg" },
];

function criarCartas() {
  let itemsDuplicados = [...items, ...items]; // Duplica os itens para pares
  let numeros = itemsDuplicados.sort(() => Math.random() - 0.5); // Embaralha os itens

  container.innerHTML = ""; // Limpa cartas existentes
  numeros.forEach((numero) => {
    // Adiciona cada carta com frente e verso
    container.innerHTML += `
      <div class="carta" data-carta="${numero.nome}">
        <div class="atras">?</div>
        <div class="frente">
          <img src="${numero.imagem}" width="120px" height="120px" />
        </div>
      </div>
    `;
  });

  virarCarta();
}

function virarCarta() {
  cartas = document.querySelectorAll(".carta"); // Seleciona todas as cartas

  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      if (primeiraCarta === "") {
        carta.classList.add("carta-virada");
        primeiraCarta = carta;
      } else if (segundaCarta === "") {
        carta.classList.add("carta-virada");
        segundaCarta = carta;
        checarCartas(); // Verifica se as cartas são iguais
      }
    });
  });
}

function checarCartas() {
  const primeiroNumero = primeiraCarta.getAttribute("data-carta");
  const segundoNumero = segundaCarta.getAttribute("data-carta");

  if (primeiroNumero === segundoNumero) {
    primeiraCarta = "";
    segundaCarta = "";
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("carta-virada");
      segundaCarta.classList.remove("carta-virada");

      primeiraCarta = "";
      segundaCarta = "";
    }, 600);
  }
}

function reiniciarJogo() {
  primeiraCarta = "";
  segundaCarta = "";
  criarCartas();
}

document.getElementById("jogos").addEventListener("click", function () {
  window.location.href = "jogos.html";
});

criarCartas();
