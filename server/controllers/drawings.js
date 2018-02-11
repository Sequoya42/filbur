const fs = require('fs');
const http = require('http');
const jwt = require('jsonwebtoken');
const path = require('path');
const p = require('../bail/.ps.json');

exports.fetch = (req, res, next) => {
  let meta = require('../assets/metaDraw.js')();
  res.json(meta);
};

exports.del = (req, res, next) => {
  const name = req.query.name;
  const jpg = req.query.jpg;
  let jsonFile = `./assets/${name}`;
  let jpgFile = `./assets/${jpg}`;
  console.log(jsonFile);
  console.log(jpgFile);
  fs.unlinkSync(jsonFile);
  fs.unlinkSync(jpgFile);
  res.send('Deleted Succesfully');
};

exports.modif = (req, res, next) => {
  let tmpFile = `assets/${Math.random() * (200 - 2) + 2}.json`;
  fs.writeFileSync(tmpFile, JSON.stringify(req.body));
  fs.renameSync(tmpFile, `assets/${req.body.filename}`);
  res.send('Modified Succesfully');
};

exports.add = (req, res, next) => {
  const addMeta = (d, name) => {
    fs.writeFileSync(name, JSON.stringify(d));
  };

  const data = req.body.img.replace(/^data:image\/\w+;base64,/, '');
  const buf = new Buffer(data, 'base64');
  const newFile = `assets/${req.body.name}.jpg`;
  const metaFile = `${req.body.name}.jpg`;
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

exports.verify = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log('verify', token);
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }
  jwt.verify(token, p.pass, (err, decoded) => {
    if (err) {
      throw ['Jwt failed', err.message]
    }
    req.user = {};
    req.user.id = decoded.user_id;
    next();
  })
}