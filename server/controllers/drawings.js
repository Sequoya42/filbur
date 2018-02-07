const fs = require('fs');
const http = require('http');
const path = require('path');

exports.fetch = (req, res, next) => {
  let meta = require('../assets/metaDraw.js')();
  res.json(meta);
};

exports.del = (req, res, next) => {
  const name = req.query.name;
  const jpg = req.query.jpg;
  let jsonFile = `./assets/${name}.json`;
  let jpgFile = `./assets/${jpg}`;
  console.log(jsonFile);
  console.log(jpgFile);
  fs.unlinkSync(jsonFile);
  fs.unlinkSync(jpgFile);
  res.send('Deleted Succesfully');
};

exports.modif = (req, res, next) => {
  console.log('modif called');
  console.log(JSON.stringify(req.body));
  let tmpFile = `./server/assets/${Math.random() * (200 - 2) + 2}.json`;
  fs.writeFileSync(req.body.name, JSON.stringify(req.body));
  // fs.rename(tmpFile, req.body.name);
  res.send('Modified Succesfully');
};

exports.add = (req, res, next) => {
  const addMeta = (d, name) => {
    fs.writeFileSync(name, JSON.stringify(d));
  };

  const data = req.body.img.replace(/^data:image\/\w+;base64,/, '');
  const buf = new Buffer(data, 'base64');
  const newFile = `assets/${req.body.name}.jpg`;
  const metaFile = `http://localhost:4200/d/${req.body.name}.jpg`;
  fs.writeFileSync(newFile, buf);
  addMeta({
      name: req.body.name,
      state: req.body.state,
      tags: req.body.tags.map(e => e.value) || [],
      path: metaFile
    },
    newFile.split('.')[0] + '.json'
  );
  res.send('Succesfully saved');
};