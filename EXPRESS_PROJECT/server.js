const expresss = require("express");

const app = expresss();

const PORT = 3030;

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

app.get("/friends", (req, res) => {
  res.json(friends);
});
app.get("friends/:friendID", (req, res) => {
  const friendID = Number(req.params.friendID);
  const friend = friends[friendID];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "friend does not exist",
    });
  }
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

