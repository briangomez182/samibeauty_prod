var express = require('express');
var router = express.Router();
/* const user = require('../controllers/user'); */

/* Requerir modulos de multer y path */
let multer = require('multer');
let path = require('path');

/* Configurar multer */

let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/users'))
    },
    filename : function(req, file, cb) {
      
        /*        avatar - 23432426052022  .png  */
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage})


/* GET users listing. */
/* router.get('/', user.index);

router.get('/register', user.register);

router.post('/register', user.processRegister);

router.get('/login', user.login);

router.post('/login', user.processLogin); 

router.get('/logout', user.logout); 

router.get('/perfil', user.edit); 

router.post('/update', upload.single('avatar'), user.update);  */




module.exports = router;