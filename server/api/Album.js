const router = require('express').Router()
const Album = require('../db/album')
const Artist = require('../db/artist')
const Song = require('../db/song')

router.get('/', async (req, res, next) => {
  try {
    const album = await Album.findAll({
      include: [{ model: Artist }]
    })
    res.json(album)
  } catch (error) {
    next(error)
  }
})

router.get('/:albumid', async (req, res, next) => {
  try {
    const album = await Album.findOne({
      where: { id: req.params.albumid },
      include: [{ model: Artist }, { model: Song }]
    })
    res.json(album)
  } catch (error) {
    next(error)
  }
})

module.exports = router
