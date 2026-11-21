const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ "extended": true }))
app.use(cors())

app.post("/calculator/add", (req, res) => {
    const value1 = Number(req.query.value1)
    const value2 = Number(req.query.value2)
    const status = !(Number.isNaN(value1) || Number.isNaN(value2))
    return res.status(status ? 200 : 400).json(
        { "result": status ? (value1 + value2) : "Failure" }
    )
})

app.post("/calculator/sub", (req, res) => {
    const value1 = Number(req.query.value1)
    const value2 = Number(req.query.value2)
    const status = !(Number.isNaN(value1) || Number.isNaN(value2))
    return res.status(status ? 200 : 400).json(
        { "result": status ? (value1 - value2) : "Failure" }
    )
})

app.post("/calculator/mul", (req, res) => {
    const value1 = Number(req.query.value1)
    const value2 = Number(req.query.value2)
    const status = !(Number.isNaN(value1) || Number.isNaN(value2))
    return res.status(status ? 200 : 400).json(
        { "result": status ? (value1 * value2) : "Failure" }
    )
})

app.post("/calculator/div", (req, res) => {
    const value1 = Number(req.query.value1)
    const value2 = Number(req.query.value2)
    const status = !(Number.isNaN(value1) || Number.isNaN(value2))
    return res.status(status ? 200 : 400).json(
        { "result": status ? (value1 / value2) : "Failure" }
    )
})

app.post("/bmi", (req, res) => {
    let height = Number(req.query.height)
    let weight = Number(req.query.weight)
    const heightUnit = req.query.heightUnit
    const weightUnit = req.query.weightUnit
    const status = !(Number.isNaN(height) || Number.isNaN(weight))
    let bmi
    let level
    
    console.log(req.originalUrl)
    console.log(req.query)
    if (status) {
        switch (heightUnit) {
            case "cm": {
                height *= 0.01
                break
            }
            case "in": {
                height *= 0.0254
                break
            }
        }
        switch (weightUnit) {
            case "lb": {
                weight *= 0.45359237
                break
            }
        }

        console.log(weight, height)
        bmi = weight / (height**2)

        if (bmi >= 40) {
            level = "Extremely Obese"
        } else if (bmi >= 30) {
            level = "Obese"
        } else if (bmi >= 25) {
            level = "Overweight"
        } else if (bmi >= 18.5) {
            level = "Normal"
        } else {
            level = "Underweight"
        }
    }

    return res.status(status ? 200 : 400).json(status ?
        { 
            "bmi": bmi,
            "level": level,
        } : { "result": "Failure" }
    )
})

app.get("/intro", (req, res) => {
    return res.status(200).json(
        {
            "generic": {
                "name": "Konlayuth",
                "surname": "Ungpraphon",
                "nickname": "Poom",
                "age": 17,
            },
            "school": {
                "studyYear": "M5",
                "school": "Kanchanapisekwittayalai Nakhon Pathom",
                "generation": 28,

                "class": "Pre-Engineering",
            },
            "contacts": {
                "instagram": "konlayuth_u"
            }
        }
    )
})

app.listen(3000, () => {
    console.log("server has started sucessfully")
})