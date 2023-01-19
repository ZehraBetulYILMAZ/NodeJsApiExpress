var Sequelize = require('sequelize');

var sequelize = require('../db/dbConnection');


var Users = sequelize.define('customers',{
    Id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
    TcKimlikNo:Sequelize.STRING,
    PhoneNumber:Sequelize.STRING,
    eMailAddress:Sequelize.STRING,
    Address:Sequelize.STRING,
    CreatedDate:{
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    UpdatedDate:Sequelize.DATE,
    Name:Sequelize.STRING,
    Surname:Sequelize.STRING, 
    Password:Sequelize.STRING,
},
{
 freezeTableName:true,
 timestamps:false
});

Users.sync({Alter:true});

module.exports = Users;