// Importa o módulo 'express' para criar e configurar o servidor web
const express = require('express');

// Carrega as variáveis de ambiente a partir de um arquivo .env
const dotenv = require('dotenv').config();

// Importa os roteadores (routers) das funcionalidades de tarefas, cadastro e login
const tasksRouter = require('./routes/tasksRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');

// Importa o módulo 'cors' para permitir o acesso de recursos de diferentes origens (Cross-Origin Resource Sharing)
const cors = require('cors');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor vai escutar, usando uma variável de ambiente ou o valor padrão 3005
app.set('port', process.env.PORT || 3005);

// Configura o servidor para processar requisições com corpo no formato JSON
app.use(express.json());

// Habilita o CORS no servidor
app.use(cors());

// Define os endpoints da API, associando cada um a seu respectivo roteador
app.use('/api', tasksRouter);    // Rota para operações relacionadas a tarefas
app.use('/api', cadastroRouter); // Rota para operações de cadastro
app.use('/api', loginRouter);    // Rota para operações de login

// Exporta o aplicativo configurado para que possa ser usado em outros arquivos
module.exports = app;
