const db = require("../data/db-config.js")

module.exports =  {
    getAll,
    add
}

function getAll() {
    return db("resource")
}

function add(resource) {
    return db("resource")
        .insert(resource)
}