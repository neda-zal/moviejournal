//jshint esversion:10
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
//var Events = require('./events.js');

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

const User = sequelize.define('User', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoincrement: true
	},
	username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  name: Sequelize.STRING,
  surname: Sequelize.STRING
	}, {
	freezeTableName: true,
	hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
		}
});

User.prototype.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

/*Proceduros.associate = (models) => {
	Proceduros.BelongsTo(Events, {foreignKey : 'iduser'});
};*/

sequelize.sync()
    .then()
    .catch(error => console.log('This error occured', error));

module.exports = User;
