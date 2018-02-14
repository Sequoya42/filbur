const fs = require('fs');
const http = require('http');
const path = require('path');
const filePath = __dirname + '/../assets/metaDraw.js';

let order = []

module.exports.shortenNames = () => {
  fs.readdirSync('./server/assets')
    .filter(file => path.extname(file) == '.jpg' || path.extname(file) == '.JPG')
    .forEach((e, i) => {
      order.push(i);
      let name = e.split('.')[0] + '.jpg';
      fs.renameSync(`./server/assets/${e}`, `./server/assets/${name}`);
    })

}

module.exports.addMeta = () => {
  let order = [];
  fs.readdirSync('./server/assets')
    .filter(file => path.extname(file) == '.jpg')
    .forEach((e, i) => {
      order.push(i);
      let name = e.split('.')[0];
      let file = {
        name,
        filename: `${name}.json`,
        path: e,
        order: i + 1,
        size: "4",
        category: 'erosion',
        description: '',
      }
      fs.writeFileSync(`./server/assets/${name}.json`, JSON.stringify(file))
    })
  fs.writeFileSync('./server/assets/only_for_order_of_drawing.json', JSON.stringify({
    filename: 'only_for_order_of_drawing',
    order
  }))
}