const express = require('express');
const signup = require('../controller/Signup');
const protect = require('../Middleware/Token');
const genertock = require('../controller/Tokengenerate');

const Createlocation = require('../controller/Location');
const getlocation = require('../controller/Location');



const router = express.Router();
const middleware=[protect]


// router.route('/user').post(CreateUser)
// router.route('/get').get(UserDetails)
// router.route('/getone/:id').get(getoneuser)
// router.route('/updateuser/:id').put(updateuser)
// router.route('/delete/:id').delete(deleteuser)

// router.route('/student').post(CreateStdt)

router.route('/sign').post(signup)
// router.route('/login').post(login)
// router.route('/loginget').post(Createlog)

// router.route('/required').post(requiredsignup)



router.route('/tockenget').post(genertock)
router.route('/verify').get(middleware,genertock)

router.route('/postloc').post(Createlocation)
router.route('/getloc').get(getlocation)

module.exports =router