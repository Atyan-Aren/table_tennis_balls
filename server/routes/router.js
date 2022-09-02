const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const ballRouter = require('./ballRouter')
const ballInfoRouter = require('./ballInfoRouter')
const basketRouter = require('./basketRouter')
const basketBallRouter = require('./basketBallRouter')
const starRouter = require('./starRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const producerCountryRouter = require('./producerCountryRouter')

router.use('/user', userRouter)
router.use('/ball', ballRouter)
router.use('/ballInfo', ballInfoRouter)
router.use('/basket', basketRouter)
router.use('/basketBall', basketBallRouter)
router.use('/star', starRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/producerCountry', producerCountryRouter)

module.exports = router
