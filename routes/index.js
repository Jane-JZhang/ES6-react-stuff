var express = require('express');
var router = express.Router();
import {render} from '../server/page';
import https from 'https';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(render());
});

module.exports = router;
