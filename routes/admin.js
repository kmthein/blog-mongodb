const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");

router.post("/", postController.createPost);

module.exports = router;