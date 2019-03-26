const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('artist', {
  name: {
    type: Sequelize.STRING,
    allownull: false
  }
})
