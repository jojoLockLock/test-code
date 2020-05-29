const express = require('express');
const router = express.Router();

let bad = false

/* GET home page. */
router.get('/', function (req, res, next) {

  if (bad) {
    res.json({ text: 'bad json' });
  } else {
    res.json({ text: 'some json' });
  }

});

module.exports = router;
