import getBlogPosts from "./util/loadBlogPosts.js";

const blogPosts = await getBlogPosts();
console.log(blogPosts);

// const express = require("express");
// let app = express();

// const apiRouter = express.Router();
// // specific blog data:
// apiRouter.route("/blog/:id").get((request, response) => {
//   // if id is NaN, 400:
  
//   // if blog post cannot be found, 404:
  
  
//   response.status(400).send();
// });
// // get all previews, for any comprehensive post list:
// apiRouter.route("/preview").get((_, response) => {
//   response.status(401).send();
// });
// // get `count` previews, for shorter preview screens:
// apiRouter.route("/preview/:count").get((request, response) => {
//   response.status(402).send();
// });

// app.use("/api", apiRouter);
// // invalid routes:
// app.use("*", (_, response) => {
//   response.status(404).send();
// });

// const PORT = 8080;
// app.listen(PORT, function() {
//   console.log(`Listening on port ${PORT}.`);
// });