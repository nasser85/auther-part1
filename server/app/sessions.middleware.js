var session = require('express-session');
var express = require('express');
var router = express.Router();


// router.use(session({
// 	cookieName: 'session',
//   	secret: 'thisisforautherworkshop',
//   	duration: 5000,
//   	activeDuration: 20000

// }))
router.use(session({
	secret: 'thisisforautherworkshop',
	cookie: {
		maxAge: 5000
	}
}))

router.use('/', function(req, res, next){
  if(!req.session.counter) req.session.counter =0;
  console.log('counter', ++req.session.counter);
  next();
});



module.exports = router;
