const child_process = require('child_process');
const path = require('path');

function main(svg, opts) {
  return new Promise((resolve, reject) => {
    const node = process.env.FRESH_NODE || process.execPath;
    const child = child_process.spawn(node, [path.resolve(__dirname, 'worker')]);

    child.stderr.on('data', (data) => reject(data));

    child.stdout.on('data', (data) => resolve(data));

    child.stdin.end(Buffer.from(JSON.stringify({ svg: svg.toString(), opts })));
  });
}

module.exports = main;