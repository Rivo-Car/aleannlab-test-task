function respondWith404(res) {
res.writeHead(404, {"Content-Type": "text/html"});
res.write("Not found\n");
res.end();
}

module.exports = {respondWith404};