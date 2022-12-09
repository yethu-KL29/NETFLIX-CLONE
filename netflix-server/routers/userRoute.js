const express = require("express");
const protect = require("../authVarification/varifiedToken");
const { register ,login, updateUser, deleteUser, getALLUsers} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.put('/update',protect,updateUser)
userRouter.delete('/delete',protect,deleteUser)
userRouter.get('/getall',protect,getALLUsers)


module.exports = userRouter;