var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // res.send('respond with a resource');
  res.setHeader('Content-Type', 'application/json');
  res.json([{
      id: "12",
      username: "Jon Smith",
      todos: [
        'Read one page of ReactJS',
        'Clean dishes',
        'Throw trash'
      ]
    },
    {
      id: "23",
      username: "Josh Smith",
      todos: [
        'Read one page of ReactJS',
        'Clean dishes',
        'Throw trash'
      ]
    }]);
});

module.exports = router;
