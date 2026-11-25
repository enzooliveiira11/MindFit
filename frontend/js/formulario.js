let button = document.getElementById("enviar");

button.onclick = async function() {
    // Obtém os valores dos campos do formulário
    let idade = document.getElementById("idade").value;
    let perdamemoria = document.getElementById("perdamemoria").value;
    let diastreinamento = document.getElementById("diastreinamento").value;

    // Cria um objeto com os dados do formulário
    let dados = {idade, perdamemoria, diastreinamento};

    // Envia os dados para o servidor usando uma requisição POST
    const response = await fetch('http://localhost:3001/api/store/tasks', {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados) // Converte o objeto em uma string JSON
    });

    // Aguarda a resposta do servidor e a converte para JSON
    let content = await response.json();

}
