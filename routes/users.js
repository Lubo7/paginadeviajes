var express = require('express');
var router = express.Router();
const UserController = require('../Controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.session.user);
});

router.post('/login',(req, res ,next)=>{
  let userController = new UserController(req, res ,next);
  userController.login();
});

module.exports = router;
