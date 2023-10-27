const express = require('express')
const movieRoute = require('./route')
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000

app.use('/api/movie', movieRoute)

app.listen(PORT, () => { console.log(`server running on ${PORT}`) })