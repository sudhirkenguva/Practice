let express = require('express');
let router = express.Router();
let userCtrl = require("../controllers/users");
let authMiddleware = require("../middleware/auth").ensureAuthenticated;
/* GET users listing. */
router.get('/', authMiddleware, async (req, res, next) => {
  try {
    let docs = await userCtrl.getUsers();
    return res.send({ users: docs });
  } catch (ex) {
    return res.status(ex.status || 500).send({ err: ex.msg || ex });
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.dept) {
      return res.status(400).send({ msg: "One or more mandatory fields (firstname, lastname, email, dept are missing" });
    };
    let result = await userCtrl.createUser(req.body);
    res.send({ msg:"User successfully added" });
  } catch (ex) {
    res.status(ex.status || 500).send({ err: ex.msg || ex });
  }
});

router.put('/', async(req, res, next)=> {
  try {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.dept || !req.body._id || !req.body.phno) {
      return res.status(400).send({ msg: "One or more mandatory fields (firstname, lastname, email, dept, _id are missing" });
    };
    let result = await userCtrl.updateUser(req.body);
    res.send({ msg:"User successfully updated" });
  } catch (ex) {
    res.status(ex.status || 500).send({ err: ex.msg || ex });
  }
});

router.delete('/', async(req, res, next)=> {
  try {
    let email = req.query.email;
    if(!email) {
      return res.status(400).send({ msg: "email field is missing" });
    }
    let result = await userCtrl.deleteUser(email);
    res.send({ msg:"User successfully removed" });
  } catch(ex) {
    res.status(ex.status || 500).send({ err: ex.msg || ex });
  }
});



module.exports = router;
