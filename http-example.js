// const http = require("http");

// const req = http.request("http://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`Data chunk: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("No more data");
//   });
// });

// req.end();

// how to use request function without calling it
// const { request } = require("https");

// const req = request("http://www.google.com", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`Data chunk: ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("No more data");
//   });
// });

// req.end();

// using get to get data does the same thing as request
const { get } = require("https");

const req = get("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});

req.end();
