const express = require('express');
const { getUserCardQRCodeData } = require("./getCards")
const { userData } = require("./userData")

const app = express();
const port = 3000;

// Mock database to store card URLs
let cardDB = [];


app.get('/', (req, res)=> {
  res.send('OK')
})


// Endpoint to generate QR code and URL for a card
app.get('/generate', async (req, res) => {
  try {
    // Temporary code fix
    const id = userData[0].ID
    const generatedQRCodeData = await getUserCardQRCodeData(id)
    res.json(generatedQRCodeData);
  } catch (error) {
    res.status(500).send('Error generating QR code or URL');
  }
});

// Endpoint to retrieve card information by card ID
app.get('/card/:cardId', (req, res) => {
  const { cardId } = req.params;
  const card = cardDB.find(card => card.cardId === cardId);

  if (card) {
    res.json(card);
  } else {
    res.status(404).send('Card not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
