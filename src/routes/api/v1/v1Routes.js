async function v1Plugin(fastify,option){
    fastify.register(require('./test/testRoutes'),{prefix:'/test'});
}

module.exports = v1Plugin;