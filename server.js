const { createServer } = require("http")
const { createReadStream } = require("fs")

const sendFile = (res,status,type, filePath) => {
    res.writeHead(status,{"Content-Type": type})
    createReadStream(filePath).pipe(res);
}

createServer((req,res) =>{
    switch (req.url) {
        case '/': return sendFile(res,200,'text/html','./home.html')
        default: sendFile(res,404,'text/html','./404.html')
    }
}).listen(5000)