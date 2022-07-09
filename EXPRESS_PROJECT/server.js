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
//********************************/
// Adding middleware to the server
app.use((req,res,next) =>{
   console.log(`${req.method} ${req.url}`);
   next();
})
//********************************/

//********** other midlewar 2*****/
app.use(expresss.json())
/// post
app.post("/friends", (req, res) => {
if(!req.body.name){
    return res.status(400).json({
        error: 'missing friend name',
    })
}
  const newFriend = {
    name: req.body.name,
    id: friends.length
  };
  friends.push(newFriend);
  res.json(friends)
});
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

