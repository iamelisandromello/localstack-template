import { spawn } from 'node:child_process'
import * as path from 'node:path'
import { existsSync } from 'node:fs'

export default async function provisionResources(lambdaZipPath: string) {
  const scriptPath = path.resolve(__dirname, '../localstack/init-resources.sh')

  if (!existsSync(scriptPath)) {
    throw new Error(`Script init-resources.sh não encontrado em: ${scriptPath}`)
  }

  console.log(`Executando init-resources.sh com lambdaZip: ${lambdaZipPath}`)

  return new Promise<void>((resolve, reject) => {
    const child = spawn('bash', [scriptPath, lambdaZipPath], {
      stdio: 'inherit'
    })

    child.on('exit', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`init-resources.sh falhou com código ${code}`))
      }
    })
  })
}
