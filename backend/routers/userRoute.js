const router = require('express').Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");

router.post('/register' , userCtrl.register);
router.get('/refresh_token', auth , userCtrl.refreshToken);
router.get('/login', userCtrl.login);
router.get('/logout' , userCtrl.logout);
router.get('/infor', auth, userCtrl.getUser);

module.exports  = router;