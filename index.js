/*
 * primary file for API
 *
 */

// Dependencies

const http = require("http");
const url = require("url");

// Server should respond to all requests with a string
const server = http.createServer((req, res) => {
  // Get the url and parse it into
  const parsedUrl = url.parse(req.url, true);

  // Get the path

  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // get query string as an object

  const queryStringObject = parsedUrl.query;

  // get http method
  const method = req.method.toLowerCase();

  // get the heades as an object

  const headers = req.headers;

  // send the response
  res.end("Hello World\n");

  // Log the requset path
  console.log(
    "Request is recieved on path: " +
      trimmedPath +
      " with the method " +
      method +
      " has these query parameters ",
    queryStringObject
  );
  console.log("Request recieved with these headers: ", headers);
});

// start server and have it listen on port 3000
server.listen(3001, () => {
  console.log("The server is listening on PORT 3001 now");
});
