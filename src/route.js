const route = (fastify, opts) => {
    fastify.post('/messages', (request, reply) => {
        fastify.mqtt.publish(request.body.topic, request.body.message)
        reply.code(201).send()
    })
}

export default route