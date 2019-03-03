require('dotenv').config();
const imageToAscii = require('image-to-ascii');
const textToImage = require('text-to-image');
const base64Img = require('base64-img');
const DEFAULTS = require('./config/imageToAscii');
const textToImageConfig = require('./config/textToImage');

function display(err, data) {
  if (!err) {
    imageToAscii(data, DEFAULTS, (error, converted) => {
      console.log(error || converted);
    });
  }
}
const name = '百度推';
const tempPath = process.env.tempPath || 'tmp';
textToImage.generate(name, textToImageConfig).then((dataUri) => {
  base64Img.img(dataUri, tempPath, name, display);
});
console.log('百度推');
