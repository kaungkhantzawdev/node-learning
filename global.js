// console.log(global)

setTimeout(() => {
    console.log('hello, I am settimeout')
    clearInterval(int)
}, 3000)


const int = setInterval(() => {
    console.log('intervel , hello')
}, 1000)