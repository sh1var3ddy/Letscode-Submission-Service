async function apiPlugin(fastify,option){
    fastify.register(require('./v1/v1Routes'),{prefix:'/v1'});
}

module.exports = apiPlugin;