async function v1Plugin(fastify,option){
    fastify.register(require('./test/testRoutes'),{prefix:'/test'});
    fastufy.register(require('./submissionRoutes'),{pefix:'/submission'})
}

module.exports = v1Plugin;