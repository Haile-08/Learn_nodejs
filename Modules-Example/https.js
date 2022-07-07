// to create a request function
const request = require("./request");
const response = require("./response");

//const read = require("./response");
function makerequest(url, data) {
  request.send(url, data);
  //return read();
  return response.read();
}

const responsedata = makerequest("https://www.google.com", "hello");
console.log(responsedata);


// Best standard is the first on