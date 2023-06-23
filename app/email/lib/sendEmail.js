const nodemailer = require('nodemailer');
const bcryptjs = require('bcryptjs');

const plantilla = require('./plantilla');
 const generarCodigo=(cod=Date.now().toString())=>{
    let str =cod;
    return {s:bcryptjs.hashSync(str,10),str:str};
}
 const enviar=async(sendEmail,token,receivEmail, usuario)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'smtp.gmail.com',
        port: 465,
        secure:true,
        auth: {
            user: sendEmail,
            pass:token
        }
     });
 try {
        await transporter.sendMail({
        from: 'Nuevo Contacto en Sami Beauty',
        cc: sendEmail,
        to: receivEmail,
        subject: '¡Nuevo Contacto en Sami Beauty!',
        html: plantilla(receivEmail, usuario)
     })
    // console.log(info)
  
 } catch (error) { 
    console.log(error)
 }
}
module.exports = {generarCodigo, enviar}
 