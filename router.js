const expres = require('express')
const router= expres.Router() 
const path = require('path');
const RegisterControler=require('./controler/RegisterControler')


router.post('/volunteer', RegisterControler.signUp)


 module.exports=router