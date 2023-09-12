exports.renderHomePage = (req, res) => {
    res.render("home", { title: "Home" });
}

exports.renderCreatePost = (req, res) => {
    res.render("create-post", { title: "Create New" });
}