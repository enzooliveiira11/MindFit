const connection = require('../config/db'); // Importa a configuração do banco de dados.
const dotenv = require('dotenv').config(); // Carrega as variáveis de ambiente a partir de um arquivo .env.

async function storeTasks(request, response) {
    // Extrai os parâmetros 'idade', 'perdamemoria' e 'diastreinamento' do corpo da requisição.
    const params = Array(
        request.body.idade,
        request.body.perdamemoria,
        request.body.diastreinamento
    );

    // Define a query SQL para inserir os dados na tabela 'tasks'.
    const query = "INSERT INTO tasks(idade, perdamemoria, diastreinamento) VALUES(?,?,?)";
    
    // Executa a query passando os parâmetros extraídos.
    connection.query(query, params, (err, results) => {
        if (results) { // Verifica se a operação foi bem-sucedida.
            response
                .status(200) // Retorna um status HTTP 200 (OK).
                .json({
                    success: true, // Indica que a operação foi bem-sucedida.
                    message: "Sucesso!", // Mensagem de sucesso.
                    data: results // Retorna os resultados da operação.
                });
        } else { // Caso ocorra um erro na execução da query.
            response.status(400) // Retorna um status HTTP 400 (Bad Request).
                .json({
                    success: false, // Indica que a operação falhou.
                    message: "Erro!", // Mensagem de erro.
                    sql: err // Retorna o erro ocorrido na query.
                });
        }
    });
}

// Exporta a função storeTasks para ser usada em outras partes do aplicativo.
module.exports = {
    storeTasks
};
