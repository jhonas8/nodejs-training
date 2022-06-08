const http = require("http");
const fs = require("fs");
const url = require("url");
const routerHtmlRender = require("./routerHtmlRender");
const fileExists = require("./fileExists");

const PORT = 3000;

const server = http.createServer((req, res)=>{
     const q = url.parse(req.url, true);
     const filename = q.pathname.substring(1);
     const htmlRender = routerHtmlRender(req, res);

     let fileAndStatus = fileExists(filename)
        ? {name: filename, statuscode: 200}
        : {name: "404.html", statuscode: 404};

     return htmlRender(fileAndStatus.name, fileAndStatus.statuscode);
});

server.listen(PORT, ()=>{
   console.log(`Server is running on port ${PORT}`);
});