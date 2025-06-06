import { required } from "joi";
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

    name:{type:String, required : true},
    email:{type : String , required : true},

    message:[{

        text:{type:String , required : true},
        sendAt:{type: Date , default : Date.now}
    },
],
    createdAt:{type: Date , default : Date.now},
})

const Contact = mongoose.model('Contact' , contactSchema)

export default Contact;