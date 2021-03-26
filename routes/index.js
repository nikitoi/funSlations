const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/qr', (req, res) => {
  res.render('qr');
});

module.exports = router;
