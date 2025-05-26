#!/usr/bin/env node

const [, , command, ...args] = process.argv

async function run() {
  switch (command) {
    case 'package': {
      const { default: packageLambda } = await import(
        '../scripts/package-lambda'
      )
      const [distDir, nodeModulesDir, outputZip] = args
      if (!distDir || !nodeModulesDir || !outputZip) {
        console.log(
          'Uso: localstack-template package <distDir> <nodeModulesDir> <outputZip>'
        )
        process.exit(1)
      }
      await packageLambda(distDir, nodeModulesDir, outputZip)
      break
    }

    case 'provision': {
      const [lambdaZip] = args
      if (!lambdaZip) {
        console.log('Uso: localstack-template provision <lambdaZip>')
        process.exit(1)
      }

      const { default: provisionResources } = await import(
        '../scripts/provision-resources'
      )
      await provisionResources(lambdaZip)
      break
    }

    default:
      console.log(`Comando desconhecido: ${command}`)
      console.log('Comandos disponíveis: package, provision')
      process.exit(1)
  }
}

run().catch((err) => {
  console.error('Erro ao executar CLI:', err)
  process.exit(1)
})
