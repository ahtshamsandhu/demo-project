const {createUser,fetchAllUsers} = require('../controllers/usersController');
const router = require("express").Router()
const authController = require ('../controllers/authController')
const {logIn} = authController
const userAuth = require('../middlewares/userAuth')
router.post('/users/',userAuth.saveUser,createUser);
router.post('/course/',createUser)
router.post('/login/',logIn)
router.get('/users',fetchAllUsers)
module.exports = router;