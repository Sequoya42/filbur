const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
/* eslint-disable no-console */

const port = process.env.PORT || 4200;
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept, Authorization'
  );
  next();
});


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// app.use((req, res, next) => {
//   console.log(req.url)
//   next()
// })
app.use(express.static(path.join(__dirname, '/assets')));

app.use(express.static(path.join(__dirname, '../dist')));
app.use(router);
router.use(require('./routes'));


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server listening : http://localhost:%s', port);
  }
});