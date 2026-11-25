const { Router } = require('express'); // Importa o método 'Router' do framework Express.
const router = Router(); // Cria uma nova instância de um roteador do Express.

const { storeTasks } = require('../controllers/tasksController'); // Importa a função 'storeTasks' do controlador 'tasksController'.

// Define uma rota POST para '/store/tasks' que executa a função 'storeTasks'.
router.post('/store/tasks', storeTasks);

module.exports = router; // Exporta o roteador para ser utilizado em outras partes da aplicação.
