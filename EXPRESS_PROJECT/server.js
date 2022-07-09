const expresss = require("express");

const app = expresss();

const PORT = 3030;

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/messages", (req, res) => {
  res.send("<h1>hello worldx</h1>");
});
app.post("/messages", (req, res) => {
  console.log("updating messsage ...");
});
app.listen(PORT, () => {
  console.log(`server is listing no port 3030`);
});
