const express = require("express")

const apiRouter = require("./routes/api")

let app = express();

app.use("/api", apiRouter);
// invalid routes:
app.use("*", (_, response) => {
  response.status(404).send();
});

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`);
});