import mongoose from "mongoose";

const databaseUser = mongoose.Schema({
   username:{
     type:string,
    required:true
   },
   email:{
    type:string,
    required:true
   },
   password:{
    type:string,
    required:true
},
   role:{
    type:string,
    default:'user',
    enum:["admin","user"],
   },
   isCustomer:{
    type:Boolean,
    default:false,
   },
})
databaseUser.index({email:1,},{unique:true},);

const User = mongoose.model("Users",databaseUser);

export default User;
