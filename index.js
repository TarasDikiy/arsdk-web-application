const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const arsdkRoutes = require('./routes/arsdk')

const PORT = process.env.PORT || 80

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(arsdkRoutes)

async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://taras:varlist@cluster0.vqbi5.mongodb.net/arsdk', {useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()