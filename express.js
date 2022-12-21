const express = require('express')

const app = express()

app.listen(3000)


app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>')
})

// file
app.get('/file', (req, res) => {
    res.sendFile('./doc/index.html', { root: __dirname})
})

//redirect 
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

// 404
app.use((req, res) => {
    res.status(404).sendFile('./doc/404.html', { root: __dirname })
})