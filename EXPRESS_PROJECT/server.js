const expresss = require("express");

const messageController = require("./controllers/messages.controllers");
const friendsController = require("./controllers/friends.controllers");
const app = expresss();

const PORT = 3030;

//********************************/
// Adding middleware to the server
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
//********************************/

//********** other midlewar 2*****/
app.use(expresss.json());
/// post

//**********************creating a router friendsrouter*********/

app.get("/messages", messageController.getMessages);
app.post("/messages", messageController.postMessage);


app.listen(PORT, () => {
  console.log(`server is listing no port 3030`);
});

