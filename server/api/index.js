const router = require('express').Router()
const  Album = require('./Album')
// connect your API routes here!
router.use('/album', Album)
module.exports = router
