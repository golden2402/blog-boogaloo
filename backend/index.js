const express = require("express")

const blogPosts = require("./util/loadBlogPosts")()

let app = express();
const apiRouter = express.Router();
// specific blog data:
apiRouter.route("/blog/:id").get((request, response) => {
  const { id } = request.params
  // if id is NaN, 400:
  if (isNaN(count) || !Number.isInteger(count)) {
    response.status(400).send("Invalid id.")
  }
  // if blog post cannot be found, 404:
  try {

  } 
  catch {

  }

  response.status(400).send();
});

// get all previews, for any comprehensive post list:
apiRouter.route("/preview").get((_, response) => {
  response.json(blogPosts).send();
});
// get `count` previews, for shorter preview screens:
apiRouter.route("/preview/:count").get((request, response) => {
  const count = Number(request.params.count);

  if (isNaN(count) || !Number.isInteger(count)) {
    response.status(400).send("Invalid number of entries.")
  }

  response.json(blogPosts.slice(-count)).send()
});

app.use("/api", apiRouter);
// invalid routes:
app.use("*", (_, response) => {
  response.status(404).send();
});

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`);
});