const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const roleMidlleware = require('../middleware/roleMiddleware')

router.post('/',roleMidlleware('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router