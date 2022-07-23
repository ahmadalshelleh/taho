const express = require('express')
require('./db/mongoose')

const instructorRouter = require('./router/instructor')
const studentRouter = require('./router/student')

const PORT = process.env.PORT || 3050
 
const app = express()

app.use(express.json()) 

app.use(instructorRouter)
app.use(studentRouter)

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})