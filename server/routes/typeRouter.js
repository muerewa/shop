const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
const TypeController = require('../controllers/typeController')
const roleMidlleware = require('../middleware/roleMiddleware')

router.post('/', roleMidlleware('ADMIN'), typeController.create)
router.get('/', TypeController.getAll)

module.exports = router