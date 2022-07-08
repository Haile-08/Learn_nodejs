//**************video 1 *************** */

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

//****************video 2 ************************ */

// const http = require("http");

// const PORT = 4050;

// const server = http.createServer();

// server.on("request", (req, res) => {
//   if (req.url === "/friends") {
//     // res.writeHead(200, {
//     //   "content-Type": "application/json",
//     // });
//     res.statusCode = 200;
//     res.setHeader('content-Type", "application/json');
//     res.end(
//       JSON.stringify({
//         id: 1,
//         name: "haile",
//       })
//     );
//   } else if (req.url === "/messages") {
//     res.write("<html>");
//     res.write("<body");
//     res.write("<h1> hi html </h1>");
//     res.write("</body>");
//     res.write("</html>");
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// });

// server.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

//**************video 3 ***************/

const http = require("http");

const PORT = 3050;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "biruk",
  },
  {
    id: 1,
    name: "haile",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");

  if (items[1] === "/friends") {
    res.statusCode = 200;
    res.setHeader('content-Type", "application/json');
    if (items.length === 3) {
      const friendsindex = Number(items[2]);
      res.end(JSON.stringify(friends[friendsindex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "/messages") {
    res.write("<html>");
    res.write("<body");
    res.write("<h1> hi html </h1>");
    res.write("</body>");
    res.write("</html>");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
