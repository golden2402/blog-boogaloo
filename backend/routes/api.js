const express = require("express");

const loadBlogPosts = require("../util/loadBlogPosts");

let blogPosts = [];
(async () => {
  blogPosts = await loadBlogPosts()
})()

const router = express.Router();
// specific blog data:
router.route("/blog/:id").get((request, response) => {
  const id = Number(request.params.id)
  // if id is NaN, 400:
  if (isNaN(id) || !Number.isInteger(id) || id < 0) {
    response.status(400).send("Invalid id.");
  }
  // if blog post cannot be found, 404:
  const blogPost = blogPosts[id]
  if (blogPost === undefined) {
    response.status(400).send(`Couldn't find blog under id: ${id}.`);
  }

  response.json(blogPost).send();
});

// get all previews, for any comprehensive post list:
router.route("/preview").get((_, response) => {
  response.json(blogPosts).send();
});
// get `count` previews, for shorter preview screens:
router.route("/preview/:count").get((request, response) => {
  const count = Number(request.params.count);

  if (isNaN(count) || !Number.isInteger(count)) {
    response.status(400).send("Invalid number of entries.")
  }

  response.json(blogPosts.slice(-count)).send()
});

module.exports = router;