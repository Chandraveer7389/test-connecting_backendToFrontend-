const http = require('http');
const fs  = require('fs');

const server = http.createServer((req,res) => {
    fs.appendFile('request.txt', 'Request url:'+ req.url + '\n', (err) => {
        switch (req.url){
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                res.end("About Page");
                break;
        }
    });
    //console.log(req.headers)
})
server.listen(8000, () => {
    console.log("Server is listening on port 8000 http://localhost:8000");
})