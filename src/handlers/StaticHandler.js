const fs = require('fs');
const mime = require('mime-types');

function isStatic(url) {
    if(url.substring(0,8) === `/public/`) {
        const fileName = 
        url.replace(`/public/`, '');
        return !!(fs.readdirSync("./src/static").indexOf(fileName) + 1);
    } else return false;
}

function processStatic(request, response) {
    const staticDataPath = './src/static/' + 
        request.url.substring(8, request.url.length);
    const staticData = fs.readFileSync(staticDataPath,
        {encoding:'utf8', flag:'r'});
    response.setHeader("Content-Type", mime.lookup(staticDataPath));
    response.end(staticData);
}

module.exports = {
    processStatic,
    isStatic
  }