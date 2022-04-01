const {Brand} = require('../dbmodels/models')
const apiError = require('../error/apiError')

class BrandController {
    async create(req,res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req,res) {
        const brands = await Brand.findAll()
        res.send(brands) 
    }
    
}

module.exports = new BrandController()