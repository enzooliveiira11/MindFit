// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("entrar-btn");  // Seleciona o botão de login
  
    // Adiciona um evento de clique ao botão de login
    button.onclick = async function(event) {
        event.preventDefault();  // Impede o comportamento padrão do formulário
  
        // Obtém os valores dos campos de e-mail e senha
        let email = document.getElementById("login_username").value;
        let senha = document.getElementById("login_password").value;
  
        // Verifica se os campos estão preenchidos
        if (!email || !senha) {
            Swal.fire('Preencha todos os campos!', '', 'error');
            return;
        }
   
        let data = { email, senha };  // Cria um objeto com os dados de login
  
        try {
            // Envia os dados de login para o servidor
            const response = await fetch('http://localhost:3001/api/login', {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=UTF-8" },
                body: JSON.stringify(data)  // Converte o objeto data para JSON
            });
  
            const result = await response.json();  // Processa a resposta do servidor
  
            // Verifica se o login foi bem-sucedido
            if (result.success) {
                Swal.fire('Login bem-sucedido!', 'Bem-vindo!', 'success')
                    .then(() => {
                        window.location.href = "../front/formulario.html";  // Redireciona para o formulário
                    });
            } else {
                Swal.fire('Erro', 'Email ou senha incorretos.', 'error');
            }
        } catch (error) {
            Swal.fire('Erro', 'Houve um problema com o login. Tente novamente.', 'error');
        }
    };
  });
  