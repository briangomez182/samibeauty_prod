const {enviar,generarCodigo} = require('./lib/sendEmail');
const enviarEmail=(sendEmail,token,receivEmail)=>{
    enviar(sendEmail,token,receivEmail);
}

module.exports = {enviarEmail}