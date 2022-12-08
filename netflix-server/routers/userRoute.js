const express = require("express");
const protect = require("../authVarification/varifiedToken");
const { register ,login, updateUser} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.put('/update',protect,updateUser)

module.exports = userRouter;