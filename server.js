const http = require("http")

http.createServer((req,res) => {
    res.writeHead(200)
    res.end('200')
}).listen(5000)
console.log('port 5000')