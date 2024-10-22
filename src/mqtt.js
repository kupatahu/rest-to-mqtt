import { connectAsync } from 'mqtt'
import fp from 'fastify-plugin';

const mqtt = async (fastify, opts) => {
  const client = await connectAsync(
    {
      host: '192.168.68.68',
      port: 1883,
      username: 'user',
      password: 'ivegot99problemsL',
      keepalive: 60
    }
  )

  fastify.decorate('mqtt', client)
}

export default fp(mqtt)

