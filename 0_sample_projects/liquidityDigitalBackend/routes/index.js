let express = require('express');
let router = express.Router();
let adminCtrl = require("../controllers/admin")
let passport = require("passport");
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Liquidity.Digital' });
});

router.post('/signup', async (req, res, next) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    if (!username) {
      return res.status(400).send({ msg: "Username is missing" });
    }
    if (!password) {
      return res.status(400).send({ msg: "Password is missing" });
    }
    let result = await adminCtrl.checkForUser(username);
    if (result == true) {
      return res.status(400).send({ msg: "User aleady exists" });
    }
    result = await adminCtrl.signup(username, password);
    res.send({ msg:"User successfully registered"});
  } catch (ex) {
    res.status(500).send({ err:ex });
  }
});

router.post('/login', 
  passport.authenticate('local'),
  (req, res)=>{
    res.send(req.user);
  });

  router.get('/logout', function(req, res){
    req.logout();
    res.send({msg:"User successfully logged out"});
  });

module.exports = router;
