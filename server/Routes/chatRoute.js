const express = require("express");
const {
  createChat,
  findChat,
  findUserChats,
  deleteChat,
} = require("../Controllers/chatController");

const router = express.Router();

router.post("/", createChat);
router.get("/find/:firstId/:secondId", findChat);
router.get("/:userId", findUserChats);
router.delete("/delete/:chatId", deleteChat);

module.exports = router;
