const http = require('http')

const server = http.createServer((req, res) => {
    console.log('sever request')
})

server.listen(3000, 'localhost', () => {
    console.log('listing localhost port 3000')
})