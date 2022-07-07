// to create a request function
const request = require("./request");
const response = require("./response");

function makerequest(url, data) {
  request.send(url, data);
  return response.read();
}

const responsedata = makerequest("https://www.google.com", "hello");
console.log(responsedata);