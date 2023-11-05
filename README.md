# desafio-crud-back-end
Desafio
## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de começar:

- [Node.js](https://nodejs.org/) (Versão 18 ou superior)
- [MySQL](https://www.mysql.com/)

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/LucasLuiz01/desafio-crud-back-end.git

2. cd desafio-crud-back-end

3. npm install

4. Crie um arquivo .env na raiz do projeto e configure suas variáveis de ambiente:

- PORT=
- DATABASE_URL=mysql://user:password@localhost:port/databaseName

5. npm start


## Rotas
O servidor define as seguintes rotas:

POST /company: Rota para criar uma nova empresa.
GET /company: Rota para obter uma lista de empresas.
DELETE /company/:id: Rota para excluir uma empresa pelo ID.
GET /companyCnpj/:cnpj: Rota para obter uma empresa pelo CNPJ.
GET /company/:id: Rota para obter uma empresa pelo ID.
PATCH /company/:id: Rota para atualizar uma empresa pelo ID.
