const submissionService = require('./submissionService')
const fastifyPlugin = require('fastify-plugin');
async function servicePlugin(fastify,options){
    fastify.decorate('submissionService',new submissionService(this.submissionRepository));
}

module.exports  = fastifyPlugin(servicePlugin);