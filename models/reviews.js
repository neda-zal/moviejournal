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

const Review = sequelize.define('Review', {
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
   vote: Sequelize.STRING,
   rating: Sequelize.INTEGER,
   comment: Sequelize.STRING

}, {
   freezeTableName: true
});

Review.associate = (models) => {
   Review.BelongsTo(User, {
      foreignKey: 'userid'
   });
};

sequelize.sync()
   .then()
   .catch(error => console.log('This error occured', error));

module.exports = Review;
