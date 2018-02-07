const bcrypt = require('bcrypt');
const p = require('../bail/.ps.json');
exports.ok = (req, res, next) => {
  bcrypt.compare(req.body.stuff, p.pass).then(r => {
    if (r) res.send('success');
    else {
      res.send('Quit playing around !');
    }
  });
};
