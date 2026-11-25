const router = require("express").Router(); // Cria uma nova instância de um roteador do Express.

const { storelogin } = require('../controllers/loginController'); // Importa a função 'storelogin' do controlador 'loginController'.

// Define uma rota POST para '/login' que executa a função 'storelogin'.
router.post('/login', storelogin);

module.exports = router; // Exporta o roteador para ser utilizado em outras partes da aplicação.
