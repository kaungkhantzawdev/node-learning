const fs = require('fs')

// fs.readFile('./doc/blog.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// fs.writeFile('./doc/blog-one.txt', 'hello, blog one', () => {
//     console.log('file was written')
// })


if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder removed')
    })
}


if(fs.existsSync('./doc/blog-one.txt')){
    fs.unlink('./doc/blog-one.txt', (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('file removed')
        }
    })
}