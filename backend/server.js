// Importa o aplicativo configurado do arquivo 'app.js'
const app = require('./app');

// Recupera a porta em que o servidor deve escutar
const port = app.get('port');

// Inicia o servidor e faz com que ele escute na porta especificada
app.listen(port, () => console.log(`Run on port ${port}!`));
