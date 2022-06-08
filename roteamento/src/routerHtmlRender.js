const fs = require("fs");

const routerHtmlRender = (req, res) => (filename, statuscode) => {
    fs.readFile(filename, (err, data)=>{
        res.writeHead(statuscode, {"Content-Type":"text/html"});
        res.write(data);
        return res.end();
    });
}

module.exports = routerHtmlRender;