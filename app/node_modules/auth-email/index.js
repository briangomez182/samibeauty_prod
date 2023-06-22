const {enviar,generarCodigo} = require('./lib/sendEmail');
const bcryptjs = require('bcryptjs')
const enviarEmail=(sendEmail,token,receivEmail,cod)=>{
    let codigoHasheado = generarCodigo(cod)
    enviar(sendEmail,token,receivEmail,codigoHasheado.s)
    return {sh:codigoHasheado.s,h:codigoHasheado.str}
}
const compareCod=(password,sh)=>{
    return bcryptjs.compareSync(password,sh)
}
module.exports = {enviarEmail,compareCod}