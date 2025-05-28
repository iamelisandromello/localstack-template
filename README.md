# LocalStack Template CLI

![Version](https://img.shields.io/badge/version-0.5.2-blue)
![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tested](https://img.shields.io/badge/tests-passing-brightgreen)

> Template CLI para provisionamento, verificação, empacotamento e gerenciamento de recursos LocalStack.

---

## 📁 Estrutura do Projeto
```
.
├── bin/
│   ├── cli.ts/                 # CLI de comandos do template
├── dist/                       # Arquivos transpilados após build
│   ├── bin/                    
│   ├── localstack/             
│   └── scripts/                
├── localstack/                 
│   ├── init-resources.sh       # Inicialização dos recursos do LoacalStack
│   └── localstack-config.ts    # Configurações do Skeleton Local Stack
├── scripts/                    # 
│   ├── check-resources.ts      # Verifica os recursos disponíveis no localstack
│   ├── manage-resources.ts     # Gerencia exclusão de recursos no localstack
│   ├── package-lambda.ts       # Encapsula o diretório dist do projeto consumer para o lambda.zip
│   ├── provision-resources.ts  # Provisionamento dos recursos a partir do lambda.zip
│   ├── resources-deleters.sh   # Exclui rescursos setados para exclusão
│   ├── selectors.ts /          # Seletor de recursos a serem excluidos
│   └── localstack              # Verifica os recursos disponíveis no localstack
│     ├── aws-config.ts         # Variáveis e configurações AWS
│     ├── create-api-gateway.ts # Cria recurso de API GAteway no LocalStack
│     ├── create-dynamodb.ts    # Cria recurso de DynamoDB no LocalStack
│     ├── create-lambda.ts      # Cria recurso de Lambda Function no LocalStack
│     ├── create-s3.ts          # Cria recurso de bucket S3 no LocalStack
│     └──  create-sqs.ts        # Cria recurso de queue SQS no LocalStack
├── tests/                      # Testes automatizados
├── docs/                       # Documentação do projeto
├── .vscode/                    # Configurações do VS Code
├── node_modules/               # Dependências do projeto
├── .env                        # Variáveis de ambiente
├── .env                        # Variáveis de ambiente para o LocalStack
├── .env.example                # Exemplo de variáveis de ambiente
├── .editorconfig               # Configurações do editor
├── .gitignore                  # Arquivos ignorados pelo Git
├── biome.json                  # Configuração do Biome (formatação e linting)
├── jest.config.js              # Configuração do Jest
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configuração do TypeScript
└── tsconfig-build.json         # Configuração de build do TypeScript
```

---

## 📦 Comandos disponíveis

### `package <distDir> <nodeModulesDir> <outputZip>`
Empacota uma função Lambda com suas dependências.

### `provision <lambdaZip>`
Provisiona recursos no LocalStack com base no arquivo ZIP informado.

### `check`
Lista todos os recursos provisionados no LocalStack.

### `manage`
Permite excluir recursos (Lambda, SQS, DynamoDB, etc.) com base em filtros via prompt interativo.

---

## 🚀 Instalação

```bash
npm install -D localstack-template
````

## 🔁 Exemplo de uso no projeto consumer
```json
"scripts": {
  "check:local": "localstack-template check",
  "manage:local": "localstack-template manage"
}
````

## 🧪 Testes
```bash
npm run test
```

## 📝 Licença
### MIT

