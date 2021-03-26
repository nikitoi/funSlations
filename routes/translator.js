const express = require('express');
const router = express.Router();
const fetchPaths = require('../script/fetchPaths');
const FormData = require('form-data');
const fetch = require("node-fetch");

router.get('/:trantype', (req, res) => {
  const tranType = req.params.trantype;
  console.log(tranType);
  res.render('translate', {tranType});
});

router.post('/:trantype', async (req, res) => {
  const tranType = req.params.trantype.toString();
  const myText = req.body.text;
  const url = fetchPaths[tranType];

  const formData = new FormData();
  formData.append('text', `${myText}`);

  const result = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const data = await result.json();
  console.log(data);
  res.json(data.contents.translated);
})

module.exports = router;
