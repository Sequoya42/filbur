const fs = require('fs');
const http = require('http');
const jwt = require('jsonwebtoken');
const path = require('path');
// const p = require('../bail/.ps.json');
//For demo purposes, pass is the hash of 'demo'
const p = {
  pass: '$2a$10$Pc29LhoxRMF8992rrnb5yOLt1C31FwY9qB68n/.C0GoYO./2wCMj2'
}


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
  const order = require('../assets/only_for_order_of_drawing.json');
  const max = Math.max(...order.order) + 1;
  order.order.push(max);
  const data = req.body.img.replace(/^data:image\/\w+;base64,/, '');
  const buf = new Buffer(data, 'base64');
  const newImg = `assets/${req.body.name}.jpg`;
  const newJson = `assets/${req.body.name}.json`;
  const metaFile = `${req.body.name}.jpg`;
  fs.writeFileSync(newImg, buf);
  delete req.body.img;
  req.body.order = max;
  fs.writeFileSync(newJson, JSON.stringify(req.body));
  fs.writeFileSync('assets/tmp_order.json', JSON.stringify(order));
  fs.renameSync('assets/tmp_order.json', 'assets/only_for_order_of_drawing.json')
  return res.send('Succesfully saved');
};

exports.verify = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log('verify', token);
  if (!token) {
    console.log('No token')
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }
  jwt.verify(token, p.pass, function(err, decoded) {
    if (err) {
      console.log('error token expired')
      return res.status(401).send({ auth: false, message: 'Token expired' })
    }
    req.user = {};
    req.user.id = decoded.user_id;
    next();
  })
}