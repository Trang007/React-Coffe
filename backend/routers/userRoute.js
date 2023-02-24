const router = require('express').Router();
const userCtrl = require("../controllers/userCtrl");

router.post('/register' , userCtrl.register);
router.get('/refresh_token' , userCtrl.refreshToken);
router.get('/login' , userCtrl.login);
router.get('/logout' , userCtrl.logout);
router.get('/infor' , userCtrl.getUser);

module.exports  = router;