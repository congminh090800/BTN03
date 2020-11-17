var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { tittle: 'BTN03',curPage:'home_page'});
});

module.exports = router;
