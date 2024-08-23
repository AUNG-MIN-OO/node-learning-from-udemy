const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

    var filename;

    switch (req.url) {
        case '/':
            filename = "/index.html";
            break;
        case '/about':
            filename = "/about.html";
            break;
        case '/contact':
            filename = "/contact.html";
            break;
        case '/contact-us':
            res.statusCode = 301;
            res.setHeader('location','/contact');
            break;
        default:
            filename = "/404.html";
            break;
    }

    console.log(req.url);

    fs.readFile('./view'+filename,(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
})

server.listen('3000', 'localhost', ()=>{
    console.log('server listening on port 3000');
})