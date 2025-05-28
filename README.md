<div align="center">
    <br />
    <br />
    <a href="https://github.com/iamelisandromello">
      <img src="https://private-user-images.githubusercontent.com/21144482/436623325-eb1e9cb3-72db-4d04-91e0-b66a7afb5f3c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcwNjA2NTEsIm5iZiI6MTc0NzA2MDM1MSwicGF0aCI6Ii8yMTE0NDQ4Mi80MzY2MjMzMjUtZWIxZTljYjMtNzJkYi00ZDA0LTkxZTAtYjY2YTdhZmI1ZjNjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTEyVDE0MzIzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE3NTlhMmVkMTQwNTRmODQ3NTFlMTE5YzBjOWZkMTEwYzM2Y2EwY2EzMjg0MzljYTU3NDQ1OWQ0ZDYwODE3NTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.rZCudM8I7EflJWrOJwA8lZUCdRtL6cTxFUhqR0E7jOM" alt="Skeleton"  alt="Skeleton Logo" width="200">
    </a>
    <p>Clean Architecture, design for serverless</p>
    <br />
</div>

<!-- Badges de tecnologias -->
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest"/>
  <img src="https://img.shields.io/badge/Biome-292929?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHBhdGggZD0iTTQgMUgxM0MxMy41NTIzIDEgMTQgMS40NDc3MSAxNCAyVjEzQzE0IDEzLjU1MjkgMTMuNTUyOSAxNCAxMyAxNEg0QzMuNDQ3NzEgMTQgMyAxMy41NTIzIDMgMTNWNEEzLjAwMzkgMy4wMDM5IDAgMDA0IDFaIi8+PC9zdmc+" alt="Biome"/>
  <img src="https://img.shields.io/badge/Clean%20Architecture-5C2D91?style=for-the-badge" alt="Clean Architecture"/>
  <img src="https://img.shields.io/badge/DDD-Domain%20Driven%20Design-blueviolet?style=for-the-badge" alt="DDD"/>
</p>

# LocalStack Template CLI

![Version](https://img.shields.io/badge/version-0.5.2-blue)
![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tested](https://img.shields.io/badge/tests-passing-brightgreen)

> Template CLI para provisionamento, verificação, empacotamento e gerenciamento de recursos LocalStack.

---

## 📦 Comandos disponíveis

### `package <distDir> <nodeModulesDir> <outputZip>`
Empacota uma função Lambda com dependências.

### `provision <lambdaZip>`
Provisiona os recursos no LocalStack com base no arquivo ZIP.

### `check`
Lista todos os recursos provisionados no LocalStack.

### `manage`
Permite excluir recursos (Lambda, SQS, DynamoDB, etc.) com base em filtros via prompt interativo.

---

## 🚀 Instalação

```bash
npm install -D localstack-template

#🔁 Exemplo de uso no projeto consumer
```json
"scripts": {
  "check:local": "localstack-template check",
  "manage:local": "localstack-template manage"
}
````

#🧪 Testes
npm run test

# 📝 Licença

---

## 🔄 Próximos passos

1. Posso entregar a **refatoração dos logs com `chalk`** agora.
2. Em seguida, configuramos `vitest` e escrevemos os primeiros testes.
3. Por fim, consolidamos o `README.md` com os badges e instruções finais.

👉 Deseja começar agora com a refatoração dos logs coloridos? Posso gerar o patch completo do `manage-resources.ts` e `check-resources.js`, ou prefere que façamos um script por vez?


