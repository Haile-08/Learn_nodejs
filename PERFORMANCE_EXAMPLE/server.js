const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now - startTime < duration) {
    //event loop is blocaked...
    console.log("object");
  }
}
app.get("/", (req, res) => {
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  res.send("Perfomance example");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("ding ding ding");
});

app.listen(3002, () => {
  console.log(`listing on port ${3002}`);
});
