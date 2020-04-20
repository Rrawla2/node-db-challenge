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

module.exports = router;