import { servicesToCheck } from '../localstack/localstack-config'
import {
  checkS3,
  checkSQS,
  checkLambda,
  checkAPIGateway,
  checkDynamoDB,
  checkCloudWatch,
  checkSNS,
  checkKinesis
} from './service-checkers'

async function checkResources() {
  console.log('🔍 Verificando recursos no LocalStack...')

  const checks: Array<Promise<void>> = []

  if (servicesToCheck.s3) checks.push(checkS3())
  if (servicesToCheck.sqs) checks.push(checkSQS())
  if (servicesToCheck.lambda) checks.push(checkLambda())
  if (servicesToCheck.apigateway) checks.push(checkAPIGateway())
  if (servicesToCheck.dynamodb) checks.push(checkDynamoDB())
  if (servicesToCheck.cloudwatch) checks.push(checkCloudWatch())
  if (servicesToCheck.sns) checks.push(checkSNS())
  if (servicesToCheck.kinesis) checks.push(checkKinesis())

  await Promise.all(checks)

  console.log('✅ Verificação concluída.')
}

checkResources().catch((err) => {
  console.error('❌ Erro inesperado durante a verificação de recursos:', err)
  process.exit(1)
})
