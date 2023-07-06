const sendEmail = require('../email/index');

module.exports = {
   
    contact: (req, res) => {

        if (req.session.langES == undefined) {
            /* Esta en ingles */
            return res.render('contact')
        } else {
            /* Esta en español */
            return res.render('contact-ES')
        }
      
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
        
        if (req.session.langES == undefined) {
            /* Esta en ingles */
            return res.render('form-submit')

        } else {
            /* Esta en español */
            return res.render('form-submit-ES')

        }

    }
}

