const express = require("express")

const Project = require("./project-model")

const router = express.Router()

router.get("/", (req, res) => {
    Project.getAll()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving project list", err })
        })
})

router.post("/", (req, res) => {
    Project.add(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: "Error adding a new project", err})
        })
})

module.exports = router;