const express = require("express");
const path = require("path");
const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");
const mongodbConnector = require("./utils/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use('/', postRoutes);

app.use('/admin', adminRoutes);

mongodbConnector();

app.listen(8080, () => {
    console.log("Server is running!");
})