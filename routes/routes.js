const {createUser,fetchAllUsers,assignCourse,fetchCourse} = require('../controllers/usersController');
const router = require("express").Router()
const authController = require ('../controllers/authController')
const {logIn} = authController
const userAuth = require('../middlewares/userAuth')
router.post('/users/',createUser);
router.post('/course/',createUser)
router.post('/login/',logIn)
router.get('/users',fetchAllUsers)
router.post('/assign/',assignCourse)
router.get('/fetchcourse',fetchCourse)
module.exports = router;