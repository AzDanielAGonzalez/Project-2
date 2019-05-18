module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("task", {
    Task: DataTypes.STRING,
    TaskDescription: DataTypes.STRING,
    TaskTime: DataTypes.DATE
  });

  return Task;
};
