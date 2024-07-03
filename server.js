const express = require('express');
const { getUserCardQRCodeData } = require("./getCards")
const { userData } = require("./userData")
const { connectDB } = require('./database/mongodb')
const { getQRCode } = require('./utils/db')

const app = express();
const port = 3000;

app.get('/', (req, res)=> {
  res.status(200).send('Server is up and running fine')
})

app.post('/generate', async (req, res) => {
  try {
    // Temporarily using static user id
    const id = userData[0].ID
    const generatedQRCodeData = await getUserCardQRCodeData(id)
    res.json(generatedQRCodeData);
  } catch (error) {
    res.status(500).send('Error generating QR code or URL');
  }
});

app.get('/card/:userId', async (req, res) => {
  const { userId } = req.params;
  const card = await getQRCode(userId)
  if (card) {
    res.json(card);
  } else {
    res.status(400).send('Card not found');
  }
});

app.listen(port, () => {
  connectDB()
  console.log(`Server running at http://localhost:${port}`);
});
