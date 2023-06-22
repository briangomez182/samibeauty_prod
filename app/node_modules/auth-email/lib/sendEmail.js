const nodemailer = require('nodemailer');
const bcryptjs = require('bcryptjs')
 const generarCodigo=(cod=Date.now().toString())=>{
    let str =cod;
    return {s:bcryptjs.hashSync(str,10),str:str};
}
 const enviar=async(sendEmail,token,receivEmail,cod)=>{
    
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
        from: 'Prueba On line',
        cc:'lpipnavas@gmail.com',
        to: receivEmail,
        subject: 'Confirmar tu cuenta',
        html: `
    Necesitamos que confirmes tus datos ingresando el siguiente código:<b> ${cod}</b>
        `
     })
    // console.log(info)
  
 } catch (error) {
    console.log(error)
 }
}
module.exports = {generarCodigo, enviar}
 