const fs = require('fs');
const mime = require('mime-types');

function processIndex(request, response) {
    const pathData = './src/index.html';
    //const data = fs.readFileSync(pathData,
   //         {encoding:'utf8', flag:'r'});
    //response.setHeader("Content-Type", "text/html");
    const data = fs.readFile(pathData, (error, data) => {
        if (error) console.log(error);
        else response.setHeader("Content-Type", "text/html");
    })
    response.end(data);
}


module.exports = {
    processIndex
  }