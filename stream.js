const fs = require('fs')

const readStream = fs.createReadStream('./doc/blog.txt', { encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./doc/blog-one.txt')

// readStream.on('data', (chunk) => {
//     console.log(chunk)
//     writeStream.write(chunk)
// })

//pipe

readStream.pipe(writeStream)