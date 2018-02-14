const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const p = require('../bail/.ps.json');
//For demo purposes, pass is the hash of 'demo'
const p = {
  pass: '$2a$10$Pc29LhoxRMF8992rrnb5yOLt1C31FwY9qB68n/.C0GoYO./2wCMj2'
}

exports.ok = (req, res, next) => {
  bcrypt.compare(req.body.stuff, p.pass).then(r => {
    if (r) {
      const token = jwt.sign({ 'user_id': 'filbur' }, p.pass, { 'expiresIn': 3600 });
      res.send({ 'filbur': token });
    } else {
      res.send('Quit playing around !');
    }
  });
};