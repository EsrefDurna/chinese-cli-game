const imageToAscii = require('image-to-ascii');
const { promisify } = require('util');
const imageToAsciiConfig = require('../config/imageToAscii');

async function ImageToAsciiArt(imagePath, config = {}) {
  try {
    const cfg = Object.assign({}, imageToAsciiConfig, config);
    const imageToAsciiPromise = promisify(imageToAscii);
    const displayed = await imageToAsciiPromise(imagePath, cfg);
    return displayed;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
module.exports = {
  ImageToAsciiArt,
};
