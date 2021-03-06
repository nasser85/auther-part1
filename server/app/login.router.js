var router = require('express').Router();

var HttpError = require('../utils/HttpError');

var Story = require('../api/stories/story.model');
var User = require('../api/users/user.model');

router.post('/', function(req, res, next){
  console.log(req.body);
  User.findOne({
    where: req.body})
  .then(function(user){
    console.log("the user", user);
    if(!user){
      console.log('oops')
      res.sendStatus(401);
    } else{
      console.log('exists!')
    req.session.user = user;
    res.status(200).send(user);
  }
  })
  .catch(next)
});

router.get('/me', function(req, res, next){
  var date = new Date();
  console.log("current date: ", date)
  if (req.session.cookie._expires > date.getTime()) {
    res.status(200).send(req.session.user);
  } else {
    res.sendStatus(401);
  }
});


router.post('/signup', function(req, res, next) {
  User.create({email: req.body.email, password: req.body.password})
  .then(function(newUser) {
    console.log(newUser);
    req.session.user = newUser;
    res.sendStatus(200);
  })
  .catch(next);

});

router.post('/logout', function(req, res, next){

  req.session.destroy();
  res.sendStatus(200);
})

module.exports = router;
