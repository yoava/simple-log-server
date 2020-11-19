const PORT = 4000;
const http = require('http');

const server = http.createServer(function (req, res) {
  console.info(`\n\n== REQUEST: ${req.method} ${req.url} ========================`);
  console.info(JSON.stringify({
    url: req.url,
    method: req.method,
    headers: req.headers,
  }, null, '  '));
  req.on('data', function (chunk) {
    console.info('DATA:', chunk.toString());
  });


  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("ok\n");
});

server.listen(PORT, function () {
  console.info("Listening on http://localhost:%s", PORT);
});
