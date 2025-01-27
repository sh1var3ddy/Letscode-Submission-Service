const fastify = require('fastify')({logger:true});

const serverConfig  = require('./config/serverConfig');
const app = require('./app');
const connectToDB = require('./config/db.config');

fastify.register(app);

fastify.listen({port:serverConfig.PORT},async (err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    await connectToDB
    console.log(`Server up at port ${serverConfig.PORT}`);
})