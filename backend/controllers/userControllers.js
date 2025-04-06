import userSchema from "../schema/userSchema.js";
// import { nanoid } from "nanoid";

let users = [];

const getAllUsers =(req,res)=>{
    console.log("request coming")
    try{
        res.send(users)
    }
    catch(e){
        console.log(e);
    }
};

const createUser =async (res,req)=>{
    try{
        const value = await userSchema.validateAsync(req.body);

        let user = {...req.body,id:nanoid()}
        users.push(user)

        res.status(201).json("user creted successfully")
        console.log(value)
    }
    catch(error){
        res.status(500).json({
            error:error?.details,
        });
    }
};

const deleteUser = (req,res)=>{
    try{

        const { id } = req.params;
        let index = users.findIndex((user) => user.id == id);
        users.splice(index,1)

        res.send({
            deletedId:id,
            message:"user deleted succesfully"
        })

    }catch(error){
        console.log(error)
    };
};

const getUser = (req,res)=>{
    try{
        const { id } = req.params;
        let foundUser = users.find((user)=>object.id == id);
        
        res.send({
            user:foundUser,
            message:"User found successfully"
        });

    }
    catch(error){
        console.log(error);
    }
};
const updateUser = (req,res)=>{
    try{
        const { id } = req.params;
        let index = users.findIndex((user)=>user.id == id);
        users.splice(index,1,{...req.body,id:id})

        res.send({
            updatedUser:id,
            message:"user updated successfully"
        })
    }
    catch(error){
        console.log(error);
    }
};

export {getAllUsers, createUser , deleteUser , getUser , updateUser}