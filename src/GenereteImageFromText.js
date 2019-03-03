const base64Img = require('base64-img');
const textToImage = require('text-to-image');
const textToImageConfig = require('../config/textToImage');

async function GenereteImageFromText(path, text, config = {}) {
  try {
    const cfg = Object.assign({}, textToImageConfig, config);
    const dataUri = await textToImage.generate(text, cfg);
    const filePath = base64Img.imgSync(dataUri, path, text);
    return filePath;
  } catch (err) {
    console.err(err);
    throw err;
  }
}
module.exports = {
  GenereteImageFromText,
};
