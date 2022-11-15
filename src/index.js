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
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("Not found\n");
        res.end();
      };
    }
);
server.listen(3000);