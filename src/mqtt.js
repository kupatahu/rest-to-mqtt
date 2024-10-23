import { connectAsync } from 'mqtt'
import fp from 'fastify-plugin';

const mqtt = async (fastify, opts) => {
  const client = await connectAsync({
    host: process.env.MQTT_HOST,
    port: Number(process.env.MQTT_PORT),
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    keepalive: Number(process.env.MQTT_KEEPALIVE),
  })

  fastify.decorate('mqtt', client)
}

export default fp(mqtt)

