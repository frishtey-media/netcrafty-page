import generateEmailTemplate from "@/utils/generateEmailTemplate";
import nodemailer from "nodemailer";

const sendNodeMail = async ({
    name,
    phone,
    email,
    subject,
    description
}) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "netcrafty.com@gmail.com",
                pass: "ddbudqskzstsfwcb",
            }
        });

        const html = generateEmailTemplate(name, email, phone, subject, description)

        const mailOptions = {
            from: "netcrafty.com@gmail.com",
            to: email,
            cc: "netcrafty.com@gmail.com",
            subject: "NetCrafty - Quick Sign Up - " + subject,
            html: html,
        };

        return transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error so the caller can handle it
    }
};

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end("Method Not Allowed");
    }

    const {
        name,
        phone,
        email,
        subject,
        description
    } = req.body;

    try {
        await sendNodeMail({
            name,
            phone,
            email,
            subject,
            description
        });
        res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email.", error: error.message });
    }
}
