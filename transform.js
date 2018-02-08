const fs = require('fs');
const http = require('http');
const path = require('path');
const filePath = __dirname + '/../assets/metaDraw.js';


/*
const fs = require('fs');
const path = require('path');

const getFiles = () => {
  let names = [];
  fs
    .readdirSync(__dirname)
    .filter(file => path.extname(file) == '.json')
		.forEach(e => e.path = `http://localhost:4200/${e.path}`)
    .forEach(e => names.push(require(`${__dirname}/${e}`)));
  return names;
};

module.exports = getFiles;

*/

fs.readdirSync('./server/assets')
  .forEach((e, i) => {
    let name = e.split('.')[0];
    console.log(name)
    let file = {
      name,
      filename: `${name}.json`,
      path: e,
      category: 'erosion',
      description: '',
    }
    fs.writeFileSync(`./server/assets/${name}.json`, JSON.stringify(file))
  })


// let test = require('./server/assets/w/metaWrite.js');
//
// // let test = [];
// //
// // fs
// //   .readdirSync('./server/assets/w')
// //   .filter(file => path.extname(file) == '.json')
// //   // .forEach(e => console.log(`./server/assets/w/${e}`))
// //   .forEach(e => test.push(require(`./server/assets/w/${e}`)));
//
// // let test = newNames.map(n => require(n));
// // newNames.forEach(n => {
// //   test.push(require(n));
// // });
//
// console.log(test);
// // let str = `module.exports = ${}`
// // fs.writeFileSync('./server/assets/w/metaWrite.js', str);