import userSchema from "../schema/userSchema.js";
import User from "../Models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import chalk from "chalk";
import 'dotenv/config'

// get all users
export const getAllUsers= async(req,res)=>{
    try{
        const userCollection = await User.find();
        res.status(200).json({
            message:'All user fetched successfully',
            users:userCollection,
        })
    }
    catch(error){
        resizeBy.status(501).json({
            error:error,
        });
    }
};

// create user
export const signUp= async(req,res)=>{
    console.log(chalk.bgCyan("incoming call from signup Api"))
    if(!req.body){
        return res.status(400).json({
            message:'Bad request'
        })
    }
    try{
        const user = await userSchema.validateAsync(req,res)
        const password = await bcrypt.hash(user.password,10)
        const newUser = await User.create({...user,password:password});
        await newUser.save();

        res.status(201).json({
            message:'User created successfully',
            user:newUser
        });
    }
    catch(error){
        if(error?.code === 11000){
            res.status(409).json({
                message:'Email already exists',
                error:error.messae,
            });

        }
        res.status(500).json({
            message:'Internal server error',
            error:error.message,
        });
    }
};

export const deleteUser= async(req,res)=>{
    const { id } = req.params;
    try{
        const deletedUser = await User.findOneandDelete(id);
        if(!deletedUser){
            return res.status(404).json({message:'user not found',});
        }
        console.log(chalk.magentaBright(deleteUser))
        res.send({
            deletedUser:{id, deleteUser},
            message:"User deleted successfully"
        });
    }
       catch(error){
        console.log(chalk.bgRed(error))
        res.status(500).json({message:'Internal server error',error})
       }
};

export const updateUser=async (req,res)=>{
    const { id } = req.params;
    try{
        const updatedUser = await User.findOneAndUpdate(
            {_id:id},
            {...req.body},
            {new:true}
        );
        if(!updateUser){
            return res.status(404).json({
                message:'user not found'
            });
        }
        res.send({
            updatedUser:{id,updatedUser},
            message:'User updated successfully'
        });
    }
    catch(error){
        console.log(chalk.bgRedBright(error));
        res.status(500).json({message:'Internal server error',error});
        }
};

export const login=async(res,req)=>{
   try{
     console.log(chalk.green("Incoming call from login api"))

     if(!req.body.email || !req.body.password){
        console.log("Missing email or password in request")
        res.status(400).json({
            success:false,
            message:"Email and password are required"
        });
     }
     const user = await User.findOne({email:req.body.email});

     if(!user){
        console.log("User not found with email",req.body.email)
        res.status(400).json({
            success:false,
            message:'Invalid email'
        });
     }
     const match = await  bcrypt.compare(req.body.password,user.password)
     if(!match){
        res.status(401).json({
            success:false,
            message:"Unauthorized password"
        });
     }

     var token = jwt.sign({...user},process.env.JWT_SECRETKEY)
     console.log(chalk.bgBlue.white(token));

     res.status(200).json({
        success:true,
        message:'user signed in',
        user:{id:user.id},
        token,
     });
}
catch(error){
    console.log(chalk.bgRedBright(error));
    res.status(500).json({message:'Internal server error',error});
}
};


// checking user is admin or not
export const isAdmin= async(res,req)=>{
    try{
      const { role, userId} = req.user;
      if(role !== 'admin'){
        console.log(chalk.bgRedBright('User is not an admin'))
        return res.status(401).json({
            success:false,
            message:'user is not an admin',
            isAdmin:false,
        });
      }
      console.log(`user is an admin ,user id is ${userId} and role  ${role}`)
      return res.status(200).json({
        success:true,
        message:'user is an admin',
        isAdmin:true,
      })
    }
catch(error){
    console.log('error in checking admin status',error?.message);
   return  res.status(500).json({
        message:'Internal server error',
    });
}
};
