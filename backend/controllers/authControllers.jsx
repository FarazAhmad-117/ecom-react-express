import User from "../models/User";
import bcrypt from "bcryptjs";

export const signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body; 
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({ message:"User Already Exist"});
        }
        const hashPassword=await bcrypt.hash(password,10);
        await User.create({
            name,
            email,
            password:hashPassword       
        })
        res.json({message:"User Created Successfully"})
    } catch (error) { 
        res.status(500).json({message:"Internal Server Error"})
    }

}