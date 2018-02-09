const fs = require('fs');
const path = require('path');

const getFiles = () => {
  let names = [];
  fs
    .readdirSync(__dirname)
    .filter(file => path.extname(file) == '.json')
    .forEach(e => {
      console.log('e', e)
      names.push(require(`${__dirname}/${e}`))
    })
  return names;
};

module.exports = getFiles;