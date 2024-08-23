const http = require('http');

const server = http.createServer((req, res)=>{

    res.setHeader('content-type', 'text/html');

    res.write('<h1>Hello World</h1>')

    console.log('request made from client');

    res.end();
})

server.listen('3000', 'localhost', ()=>{
    console.log('server listening on port 3000');
})