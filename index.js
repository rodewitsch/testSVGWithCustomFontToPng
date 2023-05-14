const fs = require('fs')
const { Resvg } = require('@resvg/resvg-js')

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
}
const resvg = new Resvg(svg, opts)
const png = resvg.render().asPng()
fs.writeFileSync('text-out.png', png)
