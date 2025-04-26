import Contact from "../Models/Contact";
import sendEmail from '../Utils/sendEmail.js';
import dotenv from 'dotenv'

dotenv.config();

const submitContactForm = async(req,res)=>{
    try{
        const {name, email , message} = req.body;

        if(!email || !message ){
           return res.status(400).json({error: 'email and message are required'});
        }
        let contact= await Contact.findOne({email});
        console.log('Contact: ', contact)

        if(contact){
               contact.messages.push({text: message , sentAt : new Date()})
        }
        else{
            if(!user) return res.status(400).json({error:'for new user Name is required'});

            contact = new Contact({
            name,
            email,
            messages: [{text: message , sentAt: new Date()}],
        });
        await sendEmail({
            type:'message_confirmation',
            to:email,
            data:{message}
        });
        }
        await contact.save();

        return res.status(contact ? 200 : 201).json({
            message:'Your message submited!',
            user: contact ? 'existing user' : 'new user'
        });
    }
    catch(error){
        res.status(500).json({error:'Server Error' , details : error.message});
    };
}
export default submitContactForm;