const fs = require('fs');
const path = require('path');

let wsRawConfig = fs.readFileSync(path.join(__dirname, '../../config.json'));
let wsConfig = JSON.parse(wsRawConfig);

module.exports = wsConfig;