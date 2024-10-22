import Fastify from 'fastify'
import mqtt from './mqtt.js'
import route from './route.js'

const start = async () => {
  const fastify = Fastify({ logger: true })

  fastify.register(mqtt)
  fastify.register(route)

  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()