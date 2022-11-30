const User = require('../models/user');

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
        user = new User({
            email,
            password
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
exports.register=register