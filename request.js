const https = require("https");
const fs = require("fs");


const request = https.get("https://www.100chinaguide.com", res => {
    let respBody = "";
    res.setEncoding("UTF-8")
    res.on('data', data =>{

        console.log(data.length);
        respBody += data.length;
    })
    res.on('end', () => {
        fs.writeFile("./test.html",respBody,err =>{
            if (err)
                throw err
            console.log('File created')
        })
    })

})
request.end()