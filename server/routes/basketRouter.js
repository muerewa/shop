const Router = require('express')
const basketContoller = require('../controllers/basketController')
const router = new Router()

router.post('/create', basketContoller.create)
router.get('/', basketContoller.getAll)

module.exports = router