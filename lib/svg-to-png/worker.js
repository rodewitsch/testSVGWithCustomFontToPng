process.stdin.on('data', function (data) {
  try {
    const { svg, opts } = JSON.parse(data.toString())
    const { Resvg } = require('@resvg/resvg-js')
    const resvg = new Resvg(svg, opts)
    const png = resvg.render().asPng()
    process.stdout.write(png);
  } catch (err) {
    process.stderr.write(err.message)
  }
});
