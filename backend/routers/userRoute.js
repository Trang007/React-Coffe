const router = require('express').Router();
const userCtrl = require("../controllers/userCtrl");

router.post('/register' , userCtrl.register);
router.post('/login' , userCtrl.login);
router.post('/logout' , userCtrl.logout);
router.post('/infor' , userCtrl.getUser);

module.exports  = router;