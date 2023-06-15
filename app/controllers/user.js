/* const db = require("../database/models"); */
/* const userHelper = require("../helpers/userHelper"); */

const user = db.User;
const sendEmail = require('../british-email/index')
/* Requiriendo el modulo de bcryptjs .. */
const bcryptjs = require("bcryptjs");
const userController = {
    index : (req, res) =>{
       
            return res.send(result)
    },
    login : (req, res) => {
        if (req.session.user != undefined) {
            //userHelper.redirectDashboard(req, res)
            return res.render('login');

        } else{
            return res.render('login');
        }

    },
    processLogin : (req, res) => {
       
        let dataForm = req.body;

        let errors = {};
        let validate = userHelper.validateFormLogin(req, res, dataForm, errors);
      
        if (validate) {
            return res.render('login');
        } else {
            return res.render('login');
        }
            
    },
    logout : (req, res) => {


       /* PROBAR ESTA FUNCONALIDAD
       
        req.session.destroy(err => {
            if (err) {
            console.log(err);
            return res.status(500).send('Error al cerrar sesión');
            }

            res.redirect('/login');
        });
        --------------- */
        
         req.session.destroy();
         res.clearCookie('userId');
         res.locals.user = undefined;
        
         return res.redirect('/users/login');
    },
    register : (req, res) => {
        return res.render("register",);
    },
    processRegister : (req, res) => {
        let tokenEmail='yhjowxhoujrbkozn'
        let email='sersenlinea@gmail.com'
        let dataForm = req.body;
        /* validaciones del form */
        let validate = userHelper.validateFormRegister(req, res, dataForm)
       
        if (validate) {
            /* agregar en la base de datos */
            let userToSave = {
                mail: dataForm.mail,
                firstname: dataForm.firstname,
                surname: dataForm.surname,
                avatar: userHelper.getPathImg(dataForm.firstname),
                pass: userHelper.passDefault(),
                levelName: userHelper.getLevelName(dataForm.levelNum),
                levelNum: dataForm.levelNum,
                typeUser: 2,
                phone: dataForm.phone,
                active: 1,
                province: dataForm.province
            }

            user.create(userToSave)
            .then((result) => {
                sendEmail.enviarEmail(email,tokenEmail,userToSave.mail)
                return res.redirect("/bienvenida")
            }).catch(error =>{
                console.log(error);
                return res.redirect("/users/register")
            });
        } 

    },
    dashboardStudent:(req,res)=>{
        //validar si es usuario activo 
        return res.render('studentDashboard')
    },
    chatStudent:(req,res)=>{
        res.locals.user={firstname:"Luis",surname:"Navas"}
        return res.render('studentChat')
    },
    classStudent:(req,res)=>{
        return res.render('studentClass')
    },
    translateStudent:(req,res)=>{
        return res.render('studentTrans')
    },
    contentStudent:(req,res)=>{
        return res.render('studentContent')
    },
    edit:(req,res)=>{

        if(req.session.user != undefined){
            return res.render('userEdit')
        }else{
            return res.redirect('/users/login')
        }
    },
    update : (req, res) => {

        let dataForm = req.body;

        let errors = {};
        let validate = userHelper.validateFormUpdateUser(req, res, dataForm, errors);

        if (validate) {
            let data = {
                /* Required */
                id: req.body.id,
                mail: req.body.mail,
                firstname: req.body.firstname,
                surname: req.body.surname,
                /* avatar       */
                /* pass         */
                /* birthDate    */
                /* dni          */
                levelName: userHelper.getLevelName(dataForm.levelNum),
                levelNum: req.body.levelNum,
                phone: req.body.phone,
                province: req.body.province
              }

            if (req.file != undefined) {
                /* Cuando guardo una Img */
                    data.avatar = req.file.filename;
            }

            if (req.body.pass != undefined) {
                data.pass = req.body.pass;
            }

            if (req.body.birthDate != undefined) {
                data.birthDate = req.body.birthDate;
            }

            if (req.body.dni != undefined) {
                data.dni = req.body.dni;
            }

            let filtro = {
                where:[{id:req.body.id}]
            };

             user.update(data, filtro)
                            .then((result) => {
                                return userHelper.redirectDashboard(req, res);
                            }).catch((err) => {
                                console.log(err);
                                return res.render('/userEdit')
                            });
        }
    }

}

module.exports = userController;