const { getDatabase } = require("../utils/database");

class Post {
  constructor(title, imgUrl, description) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
  }
  create() {
    const db = getDatabase();
    return db
      .collection("posts")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static getPosts() {
    const db = getDatabase();
    return db
        .collection("posts")
        .find()
        .toArray()
        .then((posts) => {
            return posts;            
        }).catch((err) => {
            console.log(err);
        });
  }
  static getPost(postId) {
    const db = getDatabase();
    return db
        .collection("posts")
        .find({ _id: postId })
        .next()
        .then((post) => {
            return post;
        }).catch((err) => {
            console.log(err);
        });
  }
}

module.exports = Post;
