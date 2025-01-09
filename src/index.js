const fastify = require('fastify')({logger:true});

const serverConfig  = require('./config/serverConfig');
const app = require('./app')

fastify.register(app);

fastify.listen({port:serverConfig.PORT},(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server up at port ${serverConfig.PORT}`);
})