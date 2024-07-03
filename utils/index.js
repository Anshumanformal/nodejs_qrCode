const crypto = require('crypto');

module.exports.shortenBase64 = (base64String, length = 8) => {
    // Create a hash of the base64 string
    const hash = crypto.createHash('md5').update(base64String).digest('base64');
  
    // Make the hash URL-friendly by replacing non-URL characters
    const urlFriendlyHash = hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  
    // Return the shortened URL
    return urlFriendlyHash.substring(0, length);
}