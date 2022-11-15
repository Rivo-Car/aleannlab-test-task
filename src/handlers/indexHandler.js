const fs = require('fs');
const mime = require('mime-types');

function processIndex(request, response) {
    const pathData = './src/index.html';
    const data = fs.readFileSync(pathData,
            {encoding:'utf8', flag:'r'});
    res.setHeader("Content-Type", mime.lookup(pathData));
    response.end(pathData);
}
