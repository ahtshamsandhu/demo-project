const {createUser} = require('../controllers/usersController');
const router = require("express").Router()
const authController = require ('../controllers/authController')
const {logIn} = authController
const userAuth = require('../middlewares/userAuth')
router.post('/users/',userAuth.verifyToken,userAuth.saveUser,createUser);
router.post('/login/',logIn)
//router.get('/users',userAuth.verifyToken,fetchAllUsers)
module.exports = router;