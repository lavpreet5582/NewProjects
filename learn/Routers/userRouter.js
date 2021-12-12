const express = require('express');
// const { appendFile } = require('fs');
const userRouter = express.Router();
const { getUser, getAllUser, updateUser, deleteUser, postUser } = require('../controller/userController');
// const protectRoute = require('./authHelper');
// const app = express();
// const {isAuthorized} = require('../controller/userController');
const { userSignup, loginUser, isAuthorized, protectRoute } = require('../controller/authController');

userRouter
    .route('/:id')
    .patch(updateUser)
    .delete(deleteUser)

userRouter.route('/signup').post(userSignup);


userRouter.route('/login').post(loginUser);

userRouter.use(protectRoute);
userRouter
    .route('/userProfile')
    .get(getUser)
//admin specific function

userRouter.use(isAuthorized(['admin']));
userRouter
    .route('/')
    .get(getAllUser)




// let flag = false;


module.exports = userRouter;