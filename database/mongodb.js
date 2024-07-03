const mongoose = require('mongoose');

module.exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://anshumanranjan1998:Cp2WBq2YWoBEZxZW@cluster0.qvqg650.mongodb.net/qrCode');
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    this.connectDB()
  }
};



