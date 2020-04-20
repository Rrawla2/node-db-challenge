const db = require("../data/db-config.js")

module.exports =  {
    getAll,
    add
}

function getAll() {
    return db("project")
}

function add(project) {
    return db("project")
        .insert(project)
}