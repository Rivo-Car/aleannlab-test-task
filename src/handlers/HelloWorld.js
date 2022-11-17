function isHelloworld(url) {
  return url === '/hello-world';
}

function processHelloWorld(request, response) {
  response.end('Hello world!');
}

module.exports = {
  processHelloWorld,
  isHelloworld,
};
