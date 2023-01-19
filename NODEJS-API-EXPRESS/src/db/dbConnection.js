const {Sequelize}= require('sequelize');

const sequelize = new Sequelize('oasis', 'root', 'yasar11@', {
  host: 'localhost',
  dialect:  'mysql' 
});

 try {
   sequelize.authenticate();
  console.log('successfully.');
 } catch (error) {
   console.error('Not connected', error);
 }

sequelize.sync();

module.exports = sequelize;