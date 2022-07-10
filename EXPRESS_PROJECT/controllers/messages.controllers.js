//to pass the path on any device
const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "image.png"));
  //res.send("<h1>hello worldx</h1>");
}
// best to use a named function for identifying errors
function postMessage(req, res) {
  console.log("updating messsage ...");
}

module.exports = {
  getMessages,
  postMessage,
};
