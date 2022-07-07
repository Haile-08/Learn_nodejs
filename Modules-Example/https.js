// to create a request function
const { send, read } = require("./internal");

function makerequest(url, data) {
  send(url, data);
  return read();
}

const responsedata = makerequest("https://www.google.com", "hello");
console.log(responsedata);