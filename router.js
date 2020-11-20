const expres = require('express')
const router= expres.Router() 
const path = require('path');
const RegisterControler=require('./controler/RegisterControler')


router.post('/volunteer', RegisterControler.signUp)

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});
 



 module.exports=router