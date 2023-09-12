const express = require("express");

const postController = require("../controllers/posts");

const router = express.Router();

router.get('/', postController.renderHomePage);

router.get('/add-post', postController.renderCreatePost);

module.exports = router;