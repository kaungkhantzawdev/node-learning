const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    
    let path = './public/'
    switch(req.url){
        case '/':
            res.statusCode = 200;
            path += 'index.html';
            break;

        case '/about':
            res.statusCode = 200;
            path += 'about.html';
            break;

        //redirect route
        case '/hello':
            res.statusCode = 301; //must need
            res.setHeader('Location', '/');
            res.end()
            break; 

        default:
            res.statusCode = 404;
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            res.end(data)
        }
    })
})


server.listen(3000, 'localhost', () => {
    console.log('localhost for port 3000')
})