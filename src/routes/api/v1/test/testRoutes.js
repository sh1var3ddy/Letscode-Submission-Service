const testController = require("../../../../controllers/testController");


async function test(fastify,options){
    
    fastify.get('/ping',testController.pingRequest)
}

module.exports = test;