module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    TaskName: DataTypes.STRING,
    TaskDescription: DataTypes.STRING,
    TaskTime: DataTypes.STRING
  });

  return Task;
};
