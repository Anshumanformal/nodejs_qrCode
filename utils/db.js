const mongoose = require('mongoose')
const { QRCodeData } = require('../v1/models/qrCodeData')
const { UserData } = require('../v1/models/userData')


module.exports.createQRCode = async (userId, uniqueURL, qrCodeData) => {
    try {
        const obj = {
            userId,
            uniqueURL,
            qrCodeData,
        }
        const data = await QRCodeData.create(obj)
        if(Object.keys(data).length > 0) return true
        else return false
    } catch (error) {
        console.log('Error saving data into database: ', error)
    }
}

module.exports.getQRCode = async (userId) => {
    try {
        const user = await UserData.findOne({ID: userId})
        const qrCode = await QRCodeData.findOne({userId: userId})
        
        if(Object.keys(user).length > 0 && Object.keys(qrCode).length > 0) {
            const finalData = {
                qrCodeData: {
                    userId: qrCode.userId,
                    uniqueURL: qrCode.uniqueURL,
                    qrCodeBase64: qrCode.qrCodeData
                },
                userData: {
                    id: user.ID,
                    name: user.Name,
                    email: user.Email,
                    phone: user.Phone
                }
            }
            return finalData
        }
        else return {}
    } catch (error) {
        console.log('Error fetching data from database: ', error)
    }
}