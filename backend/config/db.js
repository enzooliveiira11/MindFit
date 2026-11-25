// Importa o módulo 'mysql2' para conectar ao banco de dados MySQL
const mysql = require('mysql2');

// Carrega as variáveis de ambiente a partir de um arquivo .env
const dotenv = require('dotenv').config();

// Cria uma conexão com o banco de dados usando as credenciais fornecidas nas variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,         // Endereço do servidor MySQL
    user: process.env.DB_USER,         // Nome de usuário do MySQL
    password: process.env.DB_PASSWORD, // Senha do MySQL
    database: process.env.DB_DATABASE  // Nome do banco de dados a ser utilizado
});

// Estabelece a conexão com o banco de dados
connection.connect(function(err) {
    if (err) {
        // Lança um erro se a conexão falhar
        throw err;
    } else {
        // Exibe uma mensagem no console se a conexão for bem-sucedida
        console.log("MySql conectado!");
    }
});

// Exporta a conexão para que possa ser usada em outros arquivos
module.exports = connection;
