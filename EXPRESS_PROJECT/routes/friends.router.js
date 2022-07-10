const express = require("express");

const friendsController = require("../controllers/friends.controllers");

const friendsrouter = express.Router();

friendsrouter.post("/", friendsController.postFriend);
friendsrouter.get("/", friendsController.getFriends);
friendsrouter.get("/:friendID"), friendsController.getFriend;

module.exports = friendsrouter;
