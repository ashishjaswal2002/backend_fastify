"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const userRouter = require('./src/routes/userRouter');
const fastifyEnv = require('@fastify/env');
const mysql2_1 = __importDefault(require("mysql2"));
const options = {
    dotenv: true,
    data: process.env
};
const PORT = 4000;
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.get('/', async (request, reply) => {
    const { username, password } = request.query;
    const htmlContent = `<div>
    <h1>Grpc East West server is running on Port: ${PORT}</h1>

    </div`;
    reply.header('Content-Type', 'text/html').send(htmlContent);
});
fastify.register(userRouter, { prefix: '/api/v1' });
// async enableEverythin(async(fastify,opts)=>{
//    fastify.register(fastifyEnv,{
//     schema:
//    })
// })
const pool = mysql2_1.default.createPool({
    host: 'localhost',
    user: 'root',
    password: '9015060895',
    database: `users`
});
// fastify.get('/user/:id', function(req, reply) {
//   fastify.mysql.query(
//     'SELECT * FROM userInfo', [],
//     function onResult (err:any, result:any) {
//       reply.send(err || result)
//     }
//   )
// })
fastify.get('/api/v1/db/users', (request, reply) => {
    pool.execute('SELECT * FROM `userInfo`;', (err, results) => {
        if (err) {
            console.log('Error querying to db', err);
            reply.status(500).send({ error: 'Database query failed' });
            return; // Exit if there's an error
        }
        console.log(`QUERY RESULTS->>`, JSON.stringify(results));
        // Check if results are empty
        if (results.length === 0) {
            reply.send({ status: 200, message: "No data found", body: [] });
        }
        else {
            reply.send({ status: 200, message: "Data retrieved successfully", body: results });
        }
    });
});
fastify.listen({ port: PORT }, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    fastify.log.info(`Grpc East West server is running on Port:  ${address}`);
});
