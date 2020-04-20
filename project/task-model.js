const db = require("../data/db-config.js")

module.exports =  {
    getAll,
    add
}

function getAll() {
    return db("task")
        .join("project", "project.id", "task.project_id")
        .select("project.project_title", "project.project_descr", "task.task_descr", "task.task_notes", "task.complete")
}

function add(task) {
    return db("task")
        .insert(task)

}