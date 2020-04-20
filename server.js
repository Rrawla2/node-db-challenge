const express = require('express')

const projectRouter = require('./project/project-router.js')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/project', projectRouter)

module.exports = server;