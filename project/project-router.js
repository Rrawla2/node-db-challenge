const express = require("express")

const Project = require("./project-model")

const router = express.Router()

router.get("/project", (req, res)=> {
    Project.getAll()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving project list", err })
        })
})

module.exports = router;