const Router = require('express')
const brandController = require('../controllers/brandController')
const router = new Router()
const roleMidlleware = require('../middleware/roleMiddleware')

router.post('/',roleMidlleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router