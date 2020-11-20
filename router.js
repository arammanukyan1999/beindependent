const expres = require('express')
const router= expres.Router() 

const RegisterControler=require('./controler/RegisterControler')

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
 
router.post('/volunteer', RegisterControler.signUp)





 module.exports=router