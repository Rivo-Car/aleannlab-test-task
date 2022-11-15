const fs = require('fs');
const mime = require('mime-types');

function isStatic(url) {
    return url.substring(0,8) === `/public/`;
}

function processStatic(request, response) {
    const staticDataPath = './src/static/game.html';
    const staticData = fs.readFileSync(staticDataPath,
        {encoding:'utf8', flag:'r'});
    response.setHeader("Content-Type", mime.lookup(staticDataPath));
    response.end(staticData);
}
