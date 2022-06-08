const fs = require("fs");

const fileExists = (filename) => fs.existsSync(filename);

module.exports = fileExists;