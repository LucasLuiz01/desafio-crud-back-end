import app from "./index";
// Importe o módulo dotenv e carregue as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Acesse e imprima o valor da variável DATABASE_URL
console.log(process.env.DATABASE_URL);

app.listen(4000, () => {
    console.log(`server rodando na porta 4000}`);
  });