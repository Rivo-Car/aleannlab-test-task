const http = require("http");
const {isHelloworld, processHelloWorld} = require('./handlers/HelloWorld.js');
const {processIndex} = require('./handlers/indexHandler.js');
const {isStatic, processStatic} = require('./handlers/StaticHandler.js');
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