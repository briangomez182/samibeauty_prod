const sendEmail = require('../email/index');

module.exports = {
   
    contact: (req, res) => {
        return res.render('contact')
    },
    contactPost : (req, res) => {

        let tokenGmail='guyjwvvobnbnwyuw'
        let email='samibeauty.no.reply@gmail.com'

        /* Mail donde se va a enviar el mensaje */
        let usuarioMail = 'johansysancheza@gmail.com'; /* mail de johansys */
           
        let usuario = {
            apellido: req.body.name,
            email: req.body.email,
            telefono: req.body.phone,
            mensaje: req.body.message || "Sin Mensaje",
        }
            
        sendEmail.enviarEmail(email, tokenGmail, usuarioMail, usuario, res)
    },
    mailSend: (req, res) => {
        return res.render('form-submit')
    }
}

