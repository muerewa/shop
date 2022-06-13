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
    
app.use(cors()) // Для запросов из браузера
app.use(express.json()) // Для обработки json
app.use(fileUpload({})) // Для работы с файлами
app.use(express.static(path.resolve(__dirname, 'static')))  // Статика
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