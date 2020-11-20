var config = require('../helpers/config');

function sendEmail(email,subject,body) {
    "use strict";
    const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.emailSender.email,
                pass: config.emailSender.password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"OLS System" <unimain12345@gmail.com>', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: body // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
}

module.exports = {
    sendEmail
};
