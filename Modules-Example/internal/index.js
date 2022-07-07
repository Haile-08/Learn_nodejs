// index js is a special file if it is available node treat it
// as a module and first access the index js file
const request = require("./request");
const response = require("./response");

module.exports = {
  send: request.send,
  read: response.read,
};
