const axios = require('axios');
const userData = require('./userData');
const QRCode = require('qrcode');

// I've pasted the session id, check if it works
const appID = '66ddb9a8-88ce-4ae3-9a96-b27e8a06b981'; // Replace with your actual App ID
const powerAppsUrl = `https://apps.powerapps.com/play/${appID}`;

let cardDB = [];

// Function to generate a unique URL
const generateUniqueURL = (cardId) => {
    const baseUrl = 'https://your-domain.com/card/';
    return `${baseUrl}${cardId}`;
};

// Function to generate QR Code URL
async function generateQRCode(cardId) {
    const uniqueUrl = generateUniqueURL(cardId);
    cardDB.push({ cardId, url: uniqueUrl });
    const qrCodeData = await QRCode.toDataURL(uniqueUrl);
    return {
        cardId,
        url: uniqueUrl,
        qrCode: qrCodeData
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
