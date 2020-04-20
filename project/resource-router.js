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

module.exports = router;