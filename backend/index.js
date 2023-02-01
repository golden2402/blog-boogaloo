const express = require("express")
let app = express()

const useApiRoute = require("./api/useApiRoute")

useApiRoute("/blog/:id", function(req, res) {
  // if id is malformed, send 404:
  
  // if no post, 404:

  // ...otherwise jsonify, and send:
  res.status(404).send()
})(app)

// nonexistent routes:
app.use(function(_, res) {
  res.status(404).send()
})

const PORT = 8080
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}.`)
})