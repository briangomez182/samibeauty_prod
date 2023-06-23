const {enviar,generarCodigo} = require('./lib/sendEmail');
const enviarEmail=(sendEmail,token,receivEmail, usuario)=>{
    enviar(sendEmail,token,receivEmail, usuario);
}

module.exports = {enviarEmail}