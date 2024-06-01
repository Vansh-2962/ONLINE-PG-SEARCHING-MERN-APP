import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import  {User}  from '../models/userModel.js';

export const register = async(req,res)=>{
    try {
        const {fullname,password,confirmPassword,email,role} = req.body;
    
    // check if all the fields are entered or not
    if(!fullname || !password || !confirmPassword || !email || !role){
        res.status(400).json({msg:"PLease enter all the fields"});
    }

    //check if user already exist or not
    const user = await User.findOne({fullname});
    if(user){
        res.status(400).json({msg:"User already exists"})
    }

    //check if passwords are matching or not
    if(password != confirmPassword){
        res.status(400).json({msg:"password and confirm password do not match"})
    }

    // encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //create the user
    const newUser = await User.create({
        fullname,
        password : hashedPassword,
        email,
        role
    })

    if(newUser){
        res.status(200).json(newUser); // send the user as a response
    }
    } catch (error) {
        console.log(error)
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
           return res.status(400).json({msg:"Please enter all the fields"})
        }

        const user = await User.findOne({email})
        if(user){
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(401).json({msg:"Incorrect email or password"});
            }
            else{
                const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
                res.status(200).cookie('token',token);
            }
            return res.status(200).json(user)
        }else{
            return res.status(400).json({msg:"User does not exist"})
        }

    } catch (error) {
        console.log(error)
    }
}