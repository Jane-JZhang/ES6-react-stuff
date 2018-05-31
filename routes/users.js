var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json([{
      id: "1",
      username: "Jon Smith"
    }]);
});

module.exports = router;
