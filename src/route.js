const route = (fastify, opts) => {
    fastify.post('/messages', async (request, reply) => {
        await fastify.mqtt.publishAsync(
            request.body.topic,
            request.body.message,
            { qos: 1, retain: true }
        )
        reply.code(201).send()
    })
}

export default route