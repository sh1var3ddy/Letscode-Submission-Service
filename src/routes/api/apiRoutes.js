async function apiPlugin(fastify,option){
    fastify.register(require('./test/testRoutes'),{prefix:'/test'});
}

module.exports = apiPlugin;