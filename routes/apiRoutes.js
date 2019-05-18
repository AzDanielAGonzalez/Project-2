var db = require("../models");
//var axios = require("axios")
module.exports = function(app) {
  // Get all tasks
  app.get("/api/all/tasks", function(req, res) {
    db.tasks.findAll({}).then(function(tasksdb) {
      res.json(tasksdb);
    });
  });

  // Create a new task
  app.post("/api/save/tasks", function(req, res) {
    db.tasks
      .create({
        Task: req.body.Task,
        TaskDescription: req.body.TaskDescription,
        TaskTime: req.body.TaskTime
      })
      .then(function(tasksdb) {
        res.json(tasksdb);
      });
  });

  // Delete an task by id
  app.delete("/api/delete/tasks/:id", function(req, res) {
    db.tasks.destroy({ where: { id: req.params.id } }).then(function(tasksdb) {
      res.json(tasksdb);
    });
  });

  // Update an task by id
  app.put("/api/update/tasks/:id", function(req, res) {
    db.tasks.update({ where: { id: req.params.id } }).then(function(tasksdb) {
      res.json(tasksdb);
    });
  });
};

// var url =
//   "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=496e966f5c324e3080abd07b9111c5c3";
// console.log(url);

// axios({
//   method: "GET",
//   url:
//     "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=496e966f5c324e3080abd07b9111c5c3"
// })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
