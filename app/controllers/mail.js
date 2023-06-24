const sendEmail = require('../email/index');

module.exports = {
   
    contact: (req, res) => {
        return res.render('contact')
    },
    contactPost : (req, res) => {

        let tokenGmail='guyjwvvobnbnwyuw'
        let email='samibeauty.no.reply@gmail.com'

        let usuarioMail = 'briangomezz182@gmail.com'; /* mail de johansys */
           
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

