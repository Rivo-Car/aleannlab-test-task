const http = require('http');
const { isHelloworld, processHelloWorld } = require('./handlers/HelloWorld');
const { isStatic, processStatic } = require('./handlers/StaticHandler');
const { respondWith404 } = require('./handlers/404');

const server = http.createServer(
  (req, res) => {
    const currentUrl = req.url;
    if (isHelloworld(currentUrl)) {
      processHelloWorld(req, res);
      return;
    } if (isStatic(currentUrl)) {
      processStatic(req, res);
      return;
    }
    respondWith404(res);
  },
);
server.listen(3000);
