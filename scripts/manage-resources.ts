import inquirer from 'inquirer'
import {
  deleteTablesByFilter,
  deleteQueuesByFilter,
  deleteBucketsByFilter,
  deleteRestApisByFilter,
  deleteLambdaFunctionsByFilter,
  deleteApiGatewayRoutesByFilter
} from './resource-deleters'

async function main() {
  const { resourceType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'resourceType',
      message: 'Qual recurso deseja excluir?',
      choices: [
        { name: 'Lambda', value: 'lambda' },
        { name: 'SQS', value: 'sqs' },
        { name: 'S3', value: 's3' },
        { name: 'DynamoDB', value: 'dynamodb' },
        { name: 'API Gateway (REST APIs)', value: 'apigateway' },
        { name: 'API Gateway (Rotas)', value: 'apigateway-route' },
        new inquirer.Separator(),
        { name: 'Sair', value: 'exit' }
      ]
    }
  ])

  if (resourceType === 'exit') {
    console.log('👋 Operação cancelada pelo usuário.')
    process.exit(0)
  }

  const { pattern } = await inquirer.prompt([
    {
      type: 'input',
      name: 'pattern',
      message: 'Informe o padrão (regex ou nome exato):',
      default: '.*'
    }
  ])

  const regex = new RegExp(pattern)

  switch (resourceType) {
    case 'lambda':
      await deleteLambdaFunctionsByFilter(regex)
      break
    case 'sqs':
      await deleteQueuesByFilter(regex)
      break
    case 's3':
      await deleteBucketsByFilter(regex)
      break
    case 'dynamodb':
      await deleteTablesByFilter(regex)
      break
    case 'apigateway':
      await deleteRestApisByFilter(regex)
      break
    case 'apigateway-route': {
      const { apiId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'apiId',
          message: 'Informe o ID da API Gateway onde estão as rotas a excluir:'
        }
      ])
      await deleteApiGatewayRoutesByFilter(apiId, regex)
      break
    }
  }

  console.log('\n✅ Recursos excluídos com sucesso.')
}

main().catch((err) => {
  console.error('❌ Erro ao excluir recursos:', err)
  process.exit(1)
})
