const express = require('express')

const projectRouter = require('./project/project-router.js')
const resourceRouter = require("./project/resource-router.js")
const taskRouter = require("./project/task-router.js")

const server = express()

server.use(express.json())

server.use('/project', projectRouter)
server.use("/resource", resourceRouter)
server.use("/task", taskRouter)

module.exports = server;