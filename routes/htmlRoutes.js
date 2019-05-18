// eslint-disable-next-line no-unused-vars
var db = require("../models");
module.exports = function(app) {
  // Load main task page page
  app.get("api/all/tasks/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load single example page, pass in an example by id
  app.get("api/tasks/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
