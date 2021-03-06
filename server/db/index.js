const db = require('./db')
// require each of your models here...
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')

// ...and give them some nice associations here!
Song.belongsTo(Artist)
Artist.hasMany(Song)

Song.belongsTo(Album)
Album.hasMany(Song)

Album.belongsTo(Artist)
Artist.hasMany(Album)

module.exports = {
  db,
  Album,
  Artist,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
