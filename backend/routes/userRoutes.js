const { SignUp, login } = require('../controllers/auth.js');
const { getUser } = require('../controllers/user.js');
const verifyToken = require('../middleware/verifyToken.js')
const router = require('express').Router();


router.post('/signup', SignUp)
router.post('/login', login)
router.post('/user', verifyToken, getUser);


module.exports = router
