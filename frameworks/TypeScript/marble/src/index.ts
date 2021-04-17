import cluster from 'cluster'
import os from 'os'
import { createServer } from '@marblejs/core'
import { IO } from 'fp-ts/lib/IO'
import { listener } from './listener'

const server = createServer({
  port: 8080,
  hostname: '0.0.0.0',
  listener,
})

const main: IO<void> = async () =>
  await (await server)()

if (cluster.isMaster) {
  os.cpus().forEach(cluster.fork)

  cluster.on('exit', () => {
    process.exit(1)
  })
} else {
  main()
}
