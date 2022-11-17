const fs = require('fs');
const mime = require('mime-types');
const {respondWith404} = require('./404.js');
 function isStatic(url) {
    return url.substring(0,8) === `/public/`;
 }

 function processStatic(request, response) {
    const staticDataPath = './src/static/' + 
        request.url.substring(8, request.url.length);
    fs.readFile(staticDataPath,
        {encoding:'utf8', flag:'r'}
        ,(err,data) => {
            if (err != null) {
                respondWith404(response);
                return;
            }
            response.setHeader("Content-Type", mime.lookup(staticDataPath));
            response.end(data);
        }); 
}

module.exports = {
    processStatic,
    isStatic
}