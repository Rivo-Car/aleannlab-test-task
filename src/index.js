const http = require("http");
const fs = require('fs');
const mime = require('mime-types');

const server = http.createServer(
    (req, res) => {
      let currentUrl = req.url;
      if(isHelloworld(currentUrl)){
        processHelloWorld(req, res);
        return;
      } else if (isStatic(currentUrl)) {
        processStatic(req, res);
        return;
      } else {
        processIndex(req, res)
      };
    }
);
server.listen(3000);