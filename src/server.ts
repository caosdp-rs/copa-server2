import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { z } from 'zod'
import ShortUniqueId from 'short-unique-id'
import { poolRoutes } from './routes/pool'
import { userRoutes } from './routes/user'
import { guessRoutes } from './routes/guess'
import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'

//Singleton 


async function bootStrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })
    // Em produção isso precisa ser uma veriavel ambiente
    await fastify.register(jwt, {
        secret: 'Secreta0001'
    })
    await fastify.register(poolRoutes)
    await fastify.register(authRoutes)   
    await fastify.register(userRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(gameRoutes) 
    

    await fastify.listen({ port: 3333, host:'0.0.0.0' })
}


bootStrap()