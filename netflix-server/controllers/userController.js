const User = require('../models/user');
const bcrypt = require("bcryptjs")

const register=async(req,res,next)=>{
    const{email ,password} =req.body
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
            

         })
        await user.save()
    } catch (error) {
        console.log(error)
    }
    if(!user){
        return res.status(500).json({message:"internal server error"})
    }
    return res.status(201).json({user})
}
const login = async(req,res,next)=>{
    const {email,password}=req.body
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(error){
        console.log(error)
    }
    if(!existingUser){
        return res.status(422).json({message:"user not avail"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(isPasswordCorrect){
        return res.status(200).json({message:"successfully loggedin",user:existingUser} )
    }
    return res.status(404).json({message:"passwors is incorrect"})
   
}


exports.register=register
exports.login=login