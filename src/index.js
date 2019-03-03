require('dotenv').config();
const { GenereteImageFromText } = require('./GenereteImageFromText');
const { ImageToAsciiArt } = require('./ImageToAsciiArt');

async function init() {
  try {
    const sampletext = '百度推';
    const tempPath = process.env.tempPath || 'tmp';
    const imagePath = await GenereteImageFromText(tempPath, sampletext, {});
    const asciiArt = await ImageToAsciiArt(imagePath);
    console.log(asciiArt);
  } catch (err) {
    console.trace(err);
  }
}
init();
