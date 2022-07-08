// const http = require("http");

// const PORT = 4000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "content-Type": "application/json",
//   });
//   res.end(
//     JSON.stringify({
//       id: 1,
//       name: "haile",
//     })
//   );
// });

// server.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

const http = require("http");

const PORT = 4000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   "content-Type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader('content-Type", "application/json');
    res.end(
      JSON.stringify({
        id: 1,
        name: "haile",
      })
    );
  } else if (req.url === "/messages") {
    res.write("<html>");
    res.write("<body");
    res.write("<h1> hi html </h1>");
    res.write("</body>");
    res.write("</html>");
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
