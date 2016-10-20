var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Naslov' });
});

router.get('/nova', function(req, res, next) {
  res.render('nova', { title: 'Naslov' });
});

module.exports = router;
