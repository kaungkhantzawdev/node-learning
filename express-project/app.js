const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const BlogRouter = require('./routes/blogRoutes')

const app = express()

//dburl
const dbUrl = 'mongodb://127.0.0.1:27017/node'
mongoose.connect(dbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then((result) => { console.log(result )})
.catch((err) => console.log(err))

// register ejs 
app.set('view engine', 'ejs')

app.listen(3000)

// middleware & express static 
app.use(express.static('public'))

//requrest express form datat
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.redirect('/blogs')
})

//blog routes
app.use('/blogs',BlogRouter)

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'hello express',
        snippet: 'testing node',
        body: ' hello expresss testing node'
    })
    blog.save()
        .then((result) => { res.send(result)})
        .catch((err) =>  { console.log( err )})
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => { res.send(result)})
        .catch((err) =>  {console.log(err)})
})

app.get('/find', (req, res) => {
    Blog.findById('63a32f445efa62c78888818d')
        .then((result) => { res.send(result)})
        .catch((err) =>  {console.log(err)})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})



app.use((req, res) => {
    res.status(404).render('404', { title : '404' })
})