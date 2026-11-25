const { Router } = require('express'); // Importa o método 'Router' do framework Express.
const router = Router(); // Cria uma nova instância de um roteador do Express.

const { storecadastro } = require('../controllers/cadastroController'); // Importa a função 'storecadastro' do controlador 'cadastroController'.

// Define uma rota POST para '/store/cadastro' que executa a função 'storecadastro'.
router.post('/store/cadastro', storecadastro);

module.exports = router; // Exporta o roteador para ser utilizado em outras partes da aplicação.
