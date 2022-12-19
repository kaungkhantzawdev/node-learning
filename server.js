// const http = require('http')

// const server = http.createServer((req, res) => {
//     // console.log('sever request')
//     console.log(req.url, req.method)

//     res.setHeader('Content-Type', 'text/html')
//     res.write('<h1>Hello Node js</h1>')
//     res.end()
// })

// server.listen(3000, 'localhost', () => {
//     console.log('listing localhost port 3000')
// })


const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('./doc/blog-one.txt', (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })
})


server.listen(3000, 'localhost', () => {
    console.log('localhost for port 3000')
})