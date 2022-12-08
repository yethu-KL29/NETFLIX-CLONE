const User = require('../models/user');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const register=async(req,res,next)=>{
    const{email ,password,username} =req.body
    let user;
    if(!email || !password){
          return res.status(422).json({message:"invalid credentials"})
    }
    try {
        user = await User.findOne({email})
        if(user){
            return res.status(400).json({user: 'User already exists'})
        }
        const hashedPass= bcrypt.hashSync(password)
        user = new User({
            email,
            password:hashedPass,
            username
            

         })
        await user.save()
    } catch (error) {
        console.log(error)
    }
    const {password:hashedPass,...info}=user._doc
    if(!user){
        return res.status(500).json({message:"internal server error"})
    }
    return res.status(201).json({info})
}
const login = async(req,res,next)=>{
    const {email,password}=req.body

    const generateToken = (id,isAdmin) => {
        return jwt.sign
        (
            {id , isAdmin}, 
            process.env.JWT_SECRETKEY, 
            { expiresIn: '30d' }
       )
    }
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(error){
        console.log(error)
    }
    if(!existingUser){
        return res.status(422).json({message:"user not avail"})
    }

    
    const token= generateToken(existingUser._id , existingUser.isAdmin)
    res.cookie('token', token, {
        path :"/",
        expires:new Date(Date.now()+1000*30000),
        httpOnly:true,
        sameSite:'none' ,
        

    })



    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);

     const {password:hashedPass,...info}=existingUser._doc
    if(isPasswordCorrect){
        return res.status(200).json({message:"successfully loggedin",user:info,token} )
    }
    return res.status(404).json({message:"passwors is incorrect"})
   
}

const updateUser = async(req,res,next)=>{
    const {username,email} = req.body;
    const id = req.user._id;
    let user;
    try{

    user = await User.findByIdAndUpdate(id,{
        username,
        email,
       

    });
    await user.save();
    }catch(err){
        console.log(err)
    }
    if(!user){
        return res.status(400).json({msg: "User does not exist"})
    }
    return res.status(200).json({user})

    
}

exports.register=register
exports.login=login
exports.updateUser=updateUser