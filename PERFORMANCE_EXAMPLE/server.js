const express = require("express");
const cluster = require("cluster");
const os = require("os");

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
  res.send(`Perfomance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("ding ding ding");
});

/// clustering the request into two d/t workers for performance
if (cluster.isMaster) {
  console.log("master has been started......");
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("worker process started....");
  app.listen(3002, () => {
    console.log(`listing on port ${3002}`);
  });
}


