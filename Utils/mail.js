const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, content) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.email_host,
            port: process.env.email_port,
            auth: {
                user: process.env.email_user,
                pass: process.env.email_pass
            }
        });
        await transport.sendMail({
            from: process.env.email_user,
            to: email,
            subject: subject,
            text: content
        });
    } catch (error) {
        console.log("Email Not Sent", error);
    }
};

module.exports = sendEmail;