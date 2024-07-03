const axios = require('axios');
const userData = require('./userData');
const QRCode = require('qrcode');
const { shortenBase64 } = require('./utils/index')
const { createQRCode } = require('./utils/db')

// I've pasted the session id, check if it works
const appID = '66ddb9a8-88ce-4ae3-9a96-b27e8a06b981'; // Replace with your actual App ID
// const powerAppsUrl = `https://apps.powerapps.com/play/${appID}`;

const generateUniqueURL = (userId) => {
    try {
        return `https://automatic-halibut-6r96654jx7635w66-3000.app.github.dev/${userId}`
    } catch (error) {
        console.log('Unable to generate unique URL')
    }

};

// Function to generate QR Code URL
async function generateQRCode(userId) {
    try {
        const uniqueURL = generateUniqueURL(userId);
        const qrCodeData = await QRCode.toDataURL(uniqueURL);
        const data = createQRCode(userId, uniqueURL, qrCodeData)
        if (data) {
            return {
                url: uniqueURL,
                qrCode: qrCodeData,
                userId
            }
        }
        else return {}
    } catch (error) {
        console.log('Error in [generateQRCode]: ', error)
    }
    
}

module.exports.getUserCardQRCodeData = async (id) => {
    try {
        // const response = await axios.get(powerAppsUrl);
        // console.log('User Data:', response.data);

        // Assuming you have a function to generate QR Codes
        // return await generateQRCode(userData.cardId);
        return await generateQRCode(id);

    } catch (error) {
        console.error('Error fetching data from PowerApps:', error);
    }
}
