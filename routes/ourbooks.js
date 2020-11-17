var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController');

/* GET list of books. */
router.get('/', booksController.index);
  
  module.exports = router;
