const router = require('express').Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");

router.post('/register' , userCtrl.register);
router.get('/accesstoken', auth , userCtrl.accessToken);
router.get('/login', userCtrl.login);
router.get('/logout' , userCtrl.logout);
router.get('/infor', auth, userCtrl.getUser);

module.exports  = router;