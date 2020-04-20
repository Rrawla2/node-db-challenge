const express = require("express")

const Resource = require("./resource-model")

const router = express.Router()

router.get("/", (req, res)=> {
    Resource.getAll()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving resource list", err })
        })
})

router.post("/", (req, res) => {
    Resource.add(req.body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: "Error adding a new project", err})
        })
})

module.exports = router;