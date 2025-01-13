async function v1Plugin(fastify,option){
    fastify.register(require('./submissionRoutes'),{pefix:'/submission'})
}

module.exports = v1Plugin;