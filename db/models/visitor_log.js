'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visitor_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  visitor_log.init({
    RequestUrl: { allowNull: false, type: DataTypes.STRING },
    RequestParameters: { allowNull: false, type: DataTypes.STRING },
    RequestTimestamp: { allowNull: false, type: DataTypes.INTEGER.UNSIGNED }
  }, {
    sequelize,
    modelName: 'visitor_log',
    underscored: true,
    freezeTableName: true,
    timestamps: false
  });
  return visitor_log;
};