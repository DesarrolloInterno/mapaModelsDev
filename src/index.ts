import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express'
import http from 'http';
import cors from 'cors';
import { json } from 'body-parser';
import { dbConection } from './db/db';
import * as dotenv from "dotenv";
import schema from './graphql/schema';
dotenv.config({ path: __dirname+'/.env' });

const main = async () =>{

    let PORT:string = process.env.PORT!

    await dbConection()
    interface MyContext {
        token?: String;
    }
    
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer<MyContext>({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    
    await server.start();
    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        json(),
        expressMiddleware(server, {
          context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:`+PORT+`/graphql`);

    //hola
}

main().catch((err)=>{
    console.log(err)
})