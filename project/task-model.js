const db = require("../data/db-config.js")

module.exports =  {
    getAll,
    add
}

function getAll() {
    return db("task")
}

function add(task) {
    return db("task")
        .insert(task)
}