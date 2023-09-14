const Post = require("../models/post");

const mongodb = require("mongodb");

exports.renderHomePage = (req, res) => {
  Post.getPosts()
    .then((posts) => {
      res.render("home", { title: "Home", posts });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.renderCreatePost = (req, res) => {
  res.render("create-post", { title: "Create New" });
};

exports.createPost = (req, res) => {
  const { title, img_url, description } = req.body;
  const post = new Post(title, img_url, description);
  post
    .create()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPost = (req, res) => {
    const postId = req.params.postId;
    Post.getPost(new mongodb.ObjectId(postId))
    .then((post) => {
        console.log(post);
        res.render("details", { title: "Details", post });
    }).catch((err) => {
        console.log(err);
    });
};
