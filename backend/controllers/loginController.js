const connection = require('../config/db'); // Importa a configuração do banco de dados.
const dotenv = require('dotenv').config(); // Carrega as variáveis de ambiente a partir de um arquivo .env.

async function storelogin(request, response) {
    const email = request.body.email; // Extrai o email do corpo da requisição.

    // Define a query SQL para selecionar o email e a senha da tabela 'cadastro'.
    const query = "SELECT email, senha FROM cadastro WHERE email=?";

    // Executa a query passando o email como parâmetro.
    connection.query(query, email, (err, results) => {
        if (results.length > 0) { // Verifica se o email existe na tabela.
            const senha = request.body.senha; // Extrai a senha do corpo da requisição.
            const senhaQuery = results[0].senha; // Obtém a senha correspondente ao email do banco de dados.

            if (senha === senhaQuery) { // Compara a senha fornecida com a armazenada no banco de dados.
                response
                    .status(200) // Retorna um status HTTP 200 (OK).
                    .json({
                        success: true, // Indica que o login foi bem-sucedido.
                        message: "Login bem-sucedido", // Mensagem de sucesso.
                        data: results // Retorna os resultados da operação.
                    });
            } else { // Se as senhas não coincidirem.
                response
                    .status(400) // Retorna um status HTTP 400 (Bad Request).
                    .json({
                        success: false, // Indica que o login falhou.
                        message: "Email ou senha incorretos" // Mensagem de erro.
                    });
            }
        } else { // Se o email não for encontrado na tabela.
            response
                .status(400) // Retorna um status HTTP 400 (Bad Request).
                .json({
                    success: false, // Indica que a operação falhou.
                    message: "Deu merda", // Mensagem de erro personalizada.
                    data: err // Retorna o erro ocorrido na query.
                });
        }
    });
}

// Exporta a função storelogin para ser usada em outras partes do aplicativo.
module.exports = {
    storelogin
};
