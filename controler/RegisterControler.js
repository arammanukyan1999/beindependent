const mongoose = require('mongoose');
const User=require('../Schema/UserSchema')



class RegisterControler{
    constructor(){
    
    }
  


    async signUp(req,res){
      let value={
        eventHost:false,
        socialMedia:false,
        myNetwork:false,
        firstName:'',
        lastName:'',
        email:'',
        mobilePhone:undefined,
        sendEmailUpdates:false,
        sendMessages:false,
        phone:undefined,
        callTime:'',
        address:'',
        availableTime:'',
        comments:'',
        publish:false,
      }

    for (let i in value) {
       if(req.body[i]){
          value[i]=req.body[i]
       }  
     }
     
  User.create(value ).then(e=>{
    res.status(200).send({massege:'susess'})
      }).catch(err=>{
        if (err.name == 'ValidationError') {
          res.status(200).json(err.errors);
      } else {
          console.error(err);
          res.status(500).json(err);
      }
         
      });
     
    }   
    
    
    async contact(req, res){
      let value={
        contactUs:'',
        postThisPublicly:false,
        firstName:'',
        lastName:'',
        email:'',
        mobilePhone:'',
        sendEmailUpdates:false,
        sendMessages:false,
        address:'',
      }

    for (let i in value) {
       if(req.body[i]){
          value[i]=req.body[i]
       }  
     }
    
     Contact.create(value ).then(e=>{
        res.status(200).send({massege:'susess'})
      }).catch(err=>{
        if (err.name == 'ValidationError') {
          res.status(422).json(err.errors);
      } else {
          console.error(err);
          res.status(500).json(err);
      }  
      });



    }
 
}    


module.exports= new RegisterControler