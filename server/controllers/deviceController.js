const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../dbmodels/models')
const ApiError = require('../error/apiError')

class DeviceController {
    async create(req,res,next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let filename = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const device = await Device.create({name, price, brandId, typeId, info, img: filename})
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                })
            }    
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req,res) {
        let {brandId, typeId, limit, page} = req.query
        let devices
        page = page || 1
        limit = limit || 9
        let  offset = page * limit - limit
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        } else if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        } else if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        } else if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }

        res.send(devices)
    }

    async getOne(req,res) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })
        return res.json(device)
    }
    
}

module.exports = new DeviceController()