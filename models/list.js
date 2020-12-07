//jshint esversion:10
const Sequelize = require('sequelize');
const User = require('./user.js');

const sequelize = new Sequelize('moviejournal', 'movieaddict@movieapplication', 'Systemsgroup4', {
	host: 'movieapplication.mysql.database.azure.com',
	dialect: 'mysql',
	ssl: true,
    dialectOptions: {
       ssl: {
          require: true
       }
     }
});

const List = sequelize.define('List', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoincrement: true
	},
  userid: Sequelize.INTEGER,
  listname: Sequelize.STRING
	}, {
	freezeTableName: true
});

List.associate = (models) => {
	List.BelongsTo(User, {foreignKey : 'userid'});
};

sequelize.sync()
    .then()
    .catch(error => console.log('This error occured', error));

module.exports = List;
