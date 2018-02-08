const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const p = require('../bail/.ps.json');
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