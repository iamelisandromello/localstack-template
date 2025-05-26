#!/bin/bash

echo "▶️ Inicializando recursos no LocalStack..."

PROJECT_ROOT=$(git rev-parse --show-toplevel)
echo "Projeto localizado em: $PROJECT_ROOT"

USE_TS_NODE=false

if [ -f "$PROJECT_ROOT/tsconfig.json" ] && [ -d "$PROJECT_ROOT/scripts/localstack" ] && ls "$PROJECT_ROOT/scripts/localstack"/*.ts >/dev/null 2>&1; then
  USE_TS_NODE=true
fi

run() {
  if [ "$USE_TS_NODE" = true ]; then
    npx ts-node "$PROJECT_ROOT/scripts/localstack/$1.ts"
  else
    node "$PROJECT_ROOT/dist/scripts/localstack/$1.js"
  fi
}

run create-lambda
run create-sqs
run create-s3
run create-dynamodb
run create-api-gateway

echo "✅ Recursos provisionados com sucesso!"
