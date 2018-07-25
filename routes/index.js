var express = require('express');
var router = express.Router();
import {render} from '../server/pageRender';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(render());
});

module.exports = router;
