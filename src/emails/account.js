const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'ankitagarg462@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to my task App, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'ankitagarg462@gmail.com',
        subject:'Hope you enjoy my app',
        text:`Thanks, ${name} for using my app for your task bye bye!!`
    })
}


module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}