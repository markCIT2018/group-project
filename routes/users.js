var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//- new page which says something from tutorial, meaningless,can be deleted.
router.get('/cool', function(req, res, next) {
  res.send('Damn, you\'re looking good.');
});




module.exports = router;
