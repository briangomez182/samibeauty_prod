const {enviar,generarCodigo} = require('./lib/sendEmail');
const enviarEmail=(sendEmail,token,receivEmail, usuario, res)=>{
    enviar(sendEmail,token,receivEmail, usuario, res)
    .then(() => {
        return res.redirect('/mail/mail-send') 
    })
    .catch(err =>{
        return res.redirect('/mail/mail-send') 
    });
}

module.exports = {enviarEmail}