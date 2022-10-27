const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors())

const courseCategory = require('./Data/Category.json')
const allCourses = require("./Data/Courses.json")

app.get('/', (req, res) => {
    res.json("hello")
})

app.get('/category', (req, res) => {
    res.json(courseCategory)
})

app.get('/courses', (req, res) => {
    res.json(allCourses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
        const categoryCourse = allCourses.filter(course => course._id === id || course.category_id === id)
        res.send(categoryCourse)
})

// app.get('/course/:id', (req, res) => {
//     const id = req.params.id
//     const singleCourse = allCourses.find(course => course._id === id)
//     res.send(singleCourse)
// })

app.listen(port, () => {
    console.log("Listening at port", port)
})