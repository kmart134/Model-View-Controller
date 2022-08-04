//user extends model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
//method to run on every instance to check password - using bcrypt

class User extends Model {}

//hooks works with bcrypt???

User.init(
//User.init
//id, data type int, allow null false Primary Key
//user_name  type string, allow nul false
//password type string, allow nul false, validate
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2,10]  
          }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);



module.exports = User;



 
