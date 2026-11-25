let button = document.getElementById("entrar");

// Adiciona um evento de clique ao botão "Cadastrar"
button.onclick = async function (event) {
  event.preventDefault(); // Impede o envio do formulário ao clicar no botão

  // Obtém os valores dos campos de e-mail e senha
  const email = document.getElementById("login_username").value;
  const senha = document.getElementById("login_password").value;
  const senha2 = document.getElementById('login_password_2').value;

  // Verifica se todos os campos foram preenchidos
  if(!email || !senha) {
    Swal.fire(
        'Preencha todos os campos!',
        '',  // Mensagem de erro se algum campo estiver vazio
        'error'
    );
    return false; // Impede o envio do formulário
  }

  // Verifica se as duas senhas coincidem
  if (senha === senha2) {
    let data = {email, senha};  // Cria um objeto com os dados do usuário
  
    console.log("dados", data); // Exibe os dados no console para depuração

    // Envia os dados do cadastro para o servidor
    const response = await fetch('http://localhost:3001/api/store/cadastro', {
      method: 'POST',
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)  // Converte o objeto data para JSON e o envia
    });
  
    const content = await response.json();  // Aguarda e processa a resposta do servidor
    console.log("resposta", content);  // Exibe a resposta no console para depuração
  
    // Verifica se o cadastro foi bem-sucedido
    if (content.success) {
        Swal.fire(
          'Cadastrado com sucesso!',
          '',  // Exibe uma mensagem de sucesso
          'success'
        );
        window.location.href = 'login.html'; // Redireciona para a página de login
    } else {
        Swal.fire(
          'Esse e-mail já está em uso!',
          '',  // Exibe uma mensagem de erro se o e-mail já estiver em uso
          'error'
        );
    }
  } else {
    alert("senhas não conferem"); // Alerta se as senhas não coincidirem
  }
};
