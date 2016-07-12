var session = require('express-session');
var express = require('express');
var router = express.Router();


router.use(session({

  secret: 'thisisforautherworkshop'

}))

router.use('/', function(req, res, next){
  if(!req.session.counter) req.session.counter =0;
  console.log('counter', ++req.session.counter);
  next();
});



module.exports = router;
