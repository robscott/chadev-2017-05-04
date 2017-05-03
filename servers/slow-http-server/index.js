const http = require('http');
const port = 3000;
const startTime = new Date().getTime();
const timeout = 10 * 1000; // 10 seconds

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url === '/health') {
    response.end('200 - Running great');
  }
  response.end('Hello ChaDev!');
}

const server = http.createServer(requestHandler);

setTimeout(() => {
  server.listen(port, (err) => {
    if (err) {
      return console.error('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
  });
}, timeout);
