const Router = require('express')
const router = new Router()

const basketBallController = require('../controllers/basketBallController')

router.post('/',basketBallController.Create)
router.get('/',basketBallController.GetAll)
router.get('/:id',basketBallController.GetOne)
router.delete('/:id',basketBallController.DeleteOne)

module.exports = router