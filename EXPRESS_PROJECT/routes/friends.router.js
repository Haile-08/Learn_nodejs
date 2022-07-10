const express = require("express");

const friendsrouter = express.Router();

app.post("/", friendsController.postFriend);
app.get("/", friendsController.getFriends);
app.get("/:friendID"), friendsController.getFriend;

module.exports = friendsrouter;
