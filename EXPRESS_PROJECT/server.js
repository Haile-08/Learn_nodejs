const expresss = require("express");
const path = require("path");

const friendRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");

const app = expresss();

//to make server side rendering esay
// we import a tamplate engine

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
const PORT = 3030;

//Middleware 1
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
//Middleware 2

app.use("/", (req, res) => {
  res.render("index", {
    title: "My friends are goood",
    caption: "lets go",
  });
});
//to identify the folder with static website
app.use("/site", expresss.static(path.join(__dirname, "public")));
app.use(expresss.json());
//Routers
app.use("/friends", friendRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`server is listing no port 3030`);
});

