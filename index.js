// Dependencies
const imageToAscii = require("image-to-ascii");

var textToImage = require('text-to-image');
var base64Img = require('base64-img');
var charWidth = require("terminal-char-width");

var DEFAULTS = {
    size_options: {
        px_size: {
            width: 1
        }
    },
    concat: true,
    bg: true,
    fg: false,
    stringify: false,
    size: {
        height: "100%"
    },
    pixels: "            ",
    white_bg: true
    //pixels: " .,:;i1tfL..0##"
    //stringify_fn: asciifyPixelMatrix
};
function display(err,data) {
    if (!err) {
        imageToAscii(data, DEFAULTS, (err, converted) => {
            console.log(err || converted);
        });
    }
}
let name = '百度推'
let factor = 10;
let defaults = {
    debug: false,
    maxWidth: 200*factor,
    fontSize: 60*factor,
    lineHeight: 180*factor,
    margin: 10,
    bgColor: '#000',
    textColor: '#003300',
	fontFamily: 'Helvetica'
  };
  
let destpath = './';
textToImage.generate(name,defaults).then(function (dataUri) {
    base64Img.img(dataUri, destpath, name, display)
});

console.log('百度推')
