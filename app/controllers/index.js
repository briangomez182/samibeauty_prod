const sendEmail = require('../email/index');

module.exports = {
    home: (req, res) => {
        return res.render('index')
    },
    contact: (req, res) => {
        return res.render('contact')
    },
    contactPost : (req, res) => {

        let tokenGmail='guyjwvvobnbnwyuw'
        let email='samibeauty.no.reply@gmail.com'
        let dataForm = req.body;

        let usuarioMail = 'briangomezz182@gmail.com';
        let phone = dataForm.phone;
        /* validaciones del form */
        /*  let validate = userHelper.validateFormRegister(req, res, dataForm) */
       
         if (true) {
                sendEmail.enviarEmail(email, tokenGmail, usuarioMail, '1133691609')

        } 
 
         return res.redirect('/contact') 


    },
}

