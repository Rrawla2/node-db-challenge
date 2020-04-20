const db = require("../data/db-config.js")

module.exports =  {
    getAll,
    add
}

function getAll() {
    return db("projects")
}

function add(project) {
    return db("projects")
        .insert(project)
}