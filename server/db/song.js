const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  audioUrl: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  }
})
