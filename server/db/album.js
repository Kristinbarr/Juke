const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('album', {
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default-album.jpg'
  }
})
