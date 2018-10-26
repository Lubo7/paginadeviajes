var express = require('express');
var router = express.Router();
const UserController = require('../Controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req, res ,next)=>{
  let userController = new UserController(req, res ,next);
  userController.login();
});

module.exports = router;
