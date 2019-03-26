const router = require('express').Router()
const Album = require('../db/album')
const Artist = require('../db/artist')

router.get('/', async(req, res, next)=>{
   try {
       const album = await Album.findAll({
           include: [{model: Artist}]
       })
       res.json(album)
   } catch (error) {
       next(error)
   }
})


module.exports = router