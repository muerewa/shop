import {$host, $authHost} from './index'

export const createType = async(type) => {
    const {data} = await $authHost.post('api/type',type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type') 
    return  data
}

export const createBrand= async(brand) => {
    const {data} = await $authHost.post('api/brand',brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand') 
    return  data
}

export const createDevice= async(device) => {
    const {data} = await $authHost.post('api/device',device)
    return data
}

export const createBasket = async (userId, deviceId) => {
    const {data} = await $authHost.post('api/basket/create', {userId, deviceId})
    return data
}

export const fetchDevices = async (typeId, brandId, page,limit) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, limit, page
    }}) 
    return  data
}

export const fetchBasket = async (userId) => {
    const {data} = await $host.get('api/basket',  {params: {
        userId
    }}) 
    return  data
}

export const fetchOneDevice = async (id) => {
    const url = 'api/device/' + id
    const {data} = await $host.get(url) 
    return  data
}
