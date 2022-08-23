const http = require("http");

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1> welcome to our Server</h1> <p> this is our first serve and its ruuning smoothly..</p>"
  );
});

server.listen(port, () => {
  console.log(`server is listing on port no: ${port}`);
});
