const expres = require('express')
const router= expres.Router() 

const RegisterControler=require('./controler/RegisterControler')
 
router.post('/volunteer', RegisterControler.signUp)





router.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
 module.exports=router