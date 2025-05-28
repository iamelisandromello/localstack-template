#!/bin/bash
# init-resources Version: v0.2

echo "▶️ Inicializando recursos no LocalStack..."

# Logs úteis
echo "🔍 Diretório atual (pwd): $(pwd)"
echo "🔍 Caminho do script: $0"
echo "🔍 Caminho absoluto do script: $(realpath "$0")"
echo "🔍 Caminho do lambdaZip recebido: $1"

# Diretório base do template
TEMPLATE_ROOT=$(realpath "$(dirname "$0")/../..")
echo "📦 Diretório base do localstack-template: $TEMPLATE_ROOT"

USE_TS_NODE=false

if [ -f "$TEMPLATE_ROOT/tsconfig.json" ] && [ -d "$TEMPLATE_ROOT/scripts/localstack" ] && ls "$TEMPLATE_ROOT/scripts/localstack"/*.ts >/dev/null 2>&1; then
  USE_TS_NODE=true
fi

run() {
  if [ "$USE_TS_NODE" = true ]; then
    echo "🔧 Executando com ts-node: $1.ts"
    npx ts-node "$TEMPLATE_ROOT/scripts/localstack/$1.ts"
  else
    echo "🔧 Executando com node: $1.js"
    node "$TEMPLATE_ROOT/dist/scripts/localstack/$1.js"
  fi
}

run create-lambda
run create-sqs
run create-s3
run create-dynamodb
run create-api-gateway

echo "✅ Recursos provisionados com sucesso!"
