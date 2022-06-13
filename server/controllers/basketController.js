const {Basket, BasketDevice, Device} = require('../dbmodels/models')
const apiError = require('../error/apiError')

class BasketController {
    async create(req,res) {
        try {
            const {userId, deviceId} = req.body
            const basket = await Basket.findOne({where: {userId}})
            await BasketDevice.create({basketId: basket.id, deviceId: deviceId})
        }
        catch(e) {
            res.send(e.message)
        }
    }

    async getAll(req,res) {
        let devices = []
        const {userId} = req.query
        const basket = await Basket.findOne({where: {userId: userId}})
        const basketDevices = await BasketDevice.findAll({where: {basketId: basket.id}})
        for (let i = 0; i < basketDevices.length; i++) {
            const id =  basketDevices[i].deviceId
            const device = await Device.findOne({where: {id: id}})
            devices.push(device)
        }
        res.status(200).json(devices)
    }
    
    
}

module.exports = new BasketController()