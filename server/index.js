require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./dbmodels/models')
const cors = require('cors')
const router = require('./routes/index')
const ErrorMiddleware = require('./middleware/ErrorMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use(ErrorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))    
    } catch (e) {
        console.log(e)
    }
}

start()