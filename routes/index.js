const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const title = 'Hello Express';
  res.render('index', { title: title });
});

module.exports = router;