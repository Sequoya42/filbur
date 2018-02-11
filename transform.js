const fs = require('fs');
const http = require('http');
const path = require('path');
const filePath = __dirname + '/../assets/metaDraw.js';

let order = []
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
// fs.writeFileSync('./server/assets/only_for_order_of_drawing.json', JSON.stringify({
//   category: 'only_for_order_of_drawing',
//   order
// }))