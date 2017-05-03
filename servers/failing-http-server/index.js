const http = require('http');
const port = 3000;
const startTime = new Date().getTime();
const timeout = 10 * 1000; // 10 seconds

const requestHandler = (request, response) => {
  console.log(request.url);
  if (new Date().getTime() > (startTime + timeout)) {
    response.statusCode = 500;
    response.end('500 - Something bad happened');
  } else if (request.url === '/health') {
    response.end('200 - Running great');
  } else {
    response.end('Hello ChaDev!');
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.error('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})
