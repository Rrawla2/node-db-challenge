const express = require("express")

const Task = require("./task-model")

const router = express.Router()

router.get("/", (req, res)=> {
    Task.getAll()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving project list", err })
        })
})

router.post("/", (req, res) => {
    const tasks = req.body
    
    Task.add(tasks)
        .then(task => {
        if (task) {
            res.status(201).json(task) 
        } else {
            res.status(404).json({ message: "Project ID not found" })
        }
    })
        .catch(err => {
            res.status(500).json({ message: "Error adding a new task to this project"})
        })
})

module.exports = router;