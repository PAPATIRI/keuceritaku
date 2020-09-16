const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 3000

//load config
dotenv.config({
    path: './config/config.env'
})
//template using handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
//todo routes
//routes
app.use('/', require('./routes/index'))

connectDB()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')) //middleware
}

app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))