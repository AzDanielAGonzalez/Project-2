// Get references to page elements
var $newTask = $("#task-name");
var $taskDescription = $("#task-description");
var $submitBtn = $("#submit");
var $taskList = $("#task-list");

// The API object contains methods for each kind of request we'll make
var taskAPI = {
  saveTask: function(input) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/save/tasks",
      data: JSON.stringify(input)
    });
  },
  getTask: function() {
    return $.ajax({
      url: "api/all/tasks/",
      type: "GET"
    });
  },
  deleteTask: function(id) {
    return $.ajax({
      url: "api/delete/tasks/" + id,
      type: "DELETE"
    });
  },
  updateTask: function(id, input) {
    return $.ajax({
      url: "api/update/tasks/" + id,
      type: "PUT",
      data: JSON.stringify(input)
    });
  },
  oneTask: function(id, input) {
    return $.ajax({
      url: "api/tasks/" + id,
      type: "GET",
      data: JSON.stringify(input)
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshTask = function() {
  taskAPI.getTask().then(function(data) {
    var $tasks = data.map(function(val) {
      tasks.push(val.data);

      var $a = $("<a>")
        .text(input.text)
        .attr("href", "/tasks/" + input.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": input.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("X");

      $li.append($button);

      $li.append($task);

      return $li;
    });

    $taskList.empty();
    $taskList.append($tasks);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var task = {
    text: $newTask.val().trim(),
    description: $taskDescription.val().trim()
  };

  if (!(task.text && task.description)) {
    alert("You must enter a task!");
    return;
  }

  API.saveTask(task).then(function() {
    refreshTask();
  });

  $newTask.val("");
  $taskDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteTask(idToDelete).then(function() {
    refreshTasks();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$taskList.on("click", ".delete", handleDeleteBtnClick);
