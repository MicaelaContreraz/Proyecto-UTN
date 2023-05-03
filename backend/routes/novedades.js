var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hola soy la pagina novedades');
});

module.exports = router;
