const { Router } = require("express")

const router = Router() 

router.get("/", (req, res) => {
    res.json({ message: "metodo get" })
})

router.get("/:pid", (req, res) => {
    res.json({ message: "metodo get" })
})

router.post("/", (req, res) => {
    res.json({ message: "metodo post" })
})

router.put("/", (req, res) => {
    res.json({ message: "metodo put" })
})

router.delete("/", (req, res) => {
    res.json({ message: "metodo delete" })
})

module.exports = router

