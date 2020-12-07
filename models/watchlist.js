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

const Watchlist = sequelize.define('Watchlist', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoincrement: true
   },
   userid: Sequelize.INTEGER,
   movietitle: Sequelize.STRING(20000),
   poster: Sequelize.STRING,
   releaseDate: Sequelize.STRING,
   overview: Sequelize.STRING(20000),
   vote: Sequelize.STRING

}, {
   freezeTableName: true
});

Watchlist.associate = (models) => {
   Watchlist.BelongsTo(User, {
      foreignKey: 'userid'
   });
};

sequelize.sync()
   .then()
   .catch(error => console.log('This error occured', error));

module.exports = Watchlist;
