var router = require('express').Router();

var HttpError = require('../utils/HttpError');

var Story = require('../api/stories/story.model');
var User = require('../api/users/user.model');

router.post('/', function(req, res, next){
  console.log(req.body);
  User.findAll({
    where: req.body})
  .then(function(user){
    if(!user){
      res.sendStatus(401);
    } else{
    req.session.user = req.body.email;
    res.sendStatus(200);
  }
  })
  .catch(next)
});

module.exports = router;
