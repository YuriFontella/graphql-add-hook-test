'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async (app) => {
  app.addHook('preHandler', async () => {
    console.log('Im executed in graphql queries')
  })
})