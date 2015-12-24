/* Exporta objeto contendo os dados de configuração para o nosso servidor.
 *
 * @Arquivo configuracao.js 
 */

/* Aqui temos a configuração do nosso serviço.
 *
 * @Diretiva {storage} O nosso sistema de armazenamento.
 *  - storage.dialect (Obrigatório) O dialeto usado. Podendo ser: MySQL, PostGres ou então SQlite.
 *  - storage.port (Opcional e Recomendado) A porta utilizada para conexão com o nosso banco de dados. Não é necessário para o SQlite.
 *  - storage.host (Opcional e Recomendado) O endereço do nosso banco de dados. Não é necessário para o SQlite.
 *  - storage.password (Obrigatório) A nossa senha de conexão com o banco. Não é necessário para o SQlite.
 *  - storage.database (Obrigatório) O nome do banco utilizado.
 *  - storage.user (Obrigatório) O nome do usuário do banco. Não necessário para o SQLite.
 *
 * @Diretiva {server} O nosso servidor http.
 *  - server.port (Opcional e recomendado) A porta onde o serviço irá escutar.
 *  - server.limit (Obrigatório) Valor limite do body que é permitido. Mantenha o valor baixo para precaver
 *                               contra negação de serviços.
 *  - server.cors (Opcional) Se iremos oferecer o serviço cors.
 *  - server.cors.origin (Obrigatório) Endereços de origem que são permitidos pelo cors. Por questões de segurança, 
 *                                     utilize * apenas para a fase de desenvolvimento e testes.
 *  - server.logger (Opcional) O tipo de registro. podendo ser: 'default', 'short', 'tiny', 'dev' 
 *
 * @Diretiva {authentication} O nosso sistema de autenticação.
 *  - authentication.supersecret (Obrigatório) Super segredo para codificar e decoficar os tokens.
 *  - authentication.verifymodel (Obrigatório) o modelo onde iremos usar para a verificação para a autenticação.
 *  - authentication.accessmodel (Obrigatório) O modelo onde iremos requisitar as bandeiras para acesso.
 */
module.exports = {
  
  // Armazenamento: Armazenamento para os dados, este servidor utiliza Sequelize.
  "storage": {
    "dialect": "mysql",               // Dialeto utilizado, pode ser MySQL, SQlite e Postgres.
    "user": "leo",                    // Nome do usuário do banco de dados, não é necessário para o SQlite.
    "password": "montes",             // Senha do usuário do banco de dados, não é necessário para o SQlite.
    "database": "database",           // Nome do nosso banco de dados.
    "maxConcurrentQueries": 200,      // Valor máximo de consultas concorrentes.
    "maxConnections": 1,              // Valo máximo de conexões.
    "maxIdleTime": 30,                // Tempo máximo inativo.
    "host": "127.0.0.1",              // Endereço ao qual utilizaremos para a conexão com o banco de dados.
    "port": 3306                      // A porta ao qual utilizaremos para a conexão com o banco de dados.
  },
  
  // Servidor: As configurações para o Express.
  "server": {
    "logger": "dev",                  // Valores permitidos: 'default', 'short', 'tiny', 'dev' 
    "port": 8080,                     // A porta ao qual o servidor irá escutar por requisições http.
    "limit": "200kb",                 // Limite permitido para o conteúdo body. Lembre-se de manter o limit do body em 
                                      // '200kb' para nos precaver dos ataques de negação de serviço.
    "cors": {                         
      "origin": ["http://localhost"]  // Os endereços de origem que são permitidos, utilize * apenas na fase de desenvolvimento e testes, 
                                      // por questões de segurança.
    }
  },
  
  // Autenticação: As configurações para as autenticações.
  "authentication": {
    "supersecret": "abcd1234",         // Super segredo do Json Web Token (JWT).
    "verifymodel": "Usuario",          // O modelo onde iremos usar para a verificação para a autenticação.
    "accessmodel": "AcessoRota"        // O modelo onde iremos requisitar as bandeiras para acesso de cada modelo.
  }
  
};