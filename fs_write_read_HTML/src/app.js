const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((request, response) => {
    const urlInfo = require('url').parse(request.url,true);
    const name = urlInfo.query.name;
    const fs = require('fs');

    response.writeHead(200, {'Content-Type':'text/html'});

    if(!name) {
        fs.readFile('index.html', (err, data) => {
            response.write(data);
            return response.end();
        })
    } else {
        fs.appendFile("names.txt", name+",\r\n", (err, data) => {
                response.writeHead(302, {
                    Location: '/'
                })

                return response.end();
        });
    }
});

server.listen(port, ()=>console.log(`server running on ${port}`));