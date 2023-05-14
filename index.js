const svgToPng = require('./lib/svg-to-png');
const fs = require('fs');

const svg = fs.readFileSync('text.svg');
const opts = {
  font: {
    fontFiles: [
      './fonts/Arsenal-Bold.ttf',
      './fonts/Arsenal-Regular.ttf',
      './fonts/Arsenal-Italic.ttf'
    ],
    loadSystemFonts: false,
    defaultFontFamily: 'Arsenal',
  },
};

svgToPng(svg, opts)
  .then((png) => {
    fs.writeFileSync('text.png', png);
  })
  .catch((err) => {
    console.error(err.toString());
  });