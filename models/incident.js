module.exports = function(sequelize, DataTypes) {
    var Incident = sequelize.define('Incident', {
      time: {
        type: DataTypes.TIME,
        allowNull:false
      },
      incident: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          notEmpty: true,
        },
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
    Incident.associate = function(models) {
      models.Incident.belongsTo(models.Student, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
    return Incident;
  };