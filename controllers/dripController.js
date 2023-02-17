//Dependencies
const express = require("express")
const drip = express.Router()
const { getAllDrip, getDrip, createDrip, updateDrip, deleteDrip } = require('../queries/drip')

//Index
drip.get("/", async (req, res) => {
    const allDrip = await getAllDrip()
    if (allDrip[0]) {
        res.status(200).json(allDrip)
    } else {
        res.status(404).json({ error: "server error"})
    }
})

//Show 
drip.get("/:id", async (req, res) => {
    const { id } = req.params
    const drip = await getDrip(id)
    if (drip[0]) {
        res.status(200).json(drip)
    } else {
        res.status(404).json({ error: "Drip not found"})
    }
})

//Create
drip.post("/", async (req, res) => {
    try {
        const drip = await createDrip(req.body)
        res.status(200).json(drip)
    } catch (error) {
        res.status(404).json({ error: "Drip was not created"})
    }
})

//Delete
drip.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedDrip = await deleteDrip(id)
        res.status(200).json({deletedDrip})
    } catch (error) {
        res.status(404).json({ error: "ID NOT FOUND"})
    }
})

//Update
drip.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedDrip = await updateDrip(id, req.body)
        res.status(200).json(updatedDrip)
    } catch (error) {
        res.status(404).json({ error: "Failed to update drip"})
    }
})

//Export
module.exports = drip