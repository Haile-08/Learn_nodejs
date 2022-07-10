const expresss = require("express");

const friendRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");

const app = expresss();

const PORT = 3030;

//Middleware 1
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
//Middleware 2
app.use(expresss.json());
//Routers
app.use("/friends", friendRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`server is listing no port 3030`);
});

