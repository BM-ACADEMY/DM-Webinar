require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

// Nodemailer transporter (Zoho)
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection
transporter.verify((error, success) => {
  if (error) console.error("SMTP Error:", error);
  else console.log("✅ SMTP Ready");
});

// Root
app.get("/", (req, res) => {
  res.send("🚀 Webinar Form Backend Running!");
});

// 🟡 Receive form + Send Email
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, city, status, date, source } = req.body;

    // Validate
    if (!name || !phone || !date) {
      return res.status(400).json({ message: "Required fields missing!" });
    }

    const receiptMail = {
      from: process.env.EMAIL_USER,
      to: email || process.env.EMAIL_USER, // if email empty, send copy to admin
      subject: "🎉 Webinar Registration Received!",
    html: `
  <div style="font-family: 'Arial'; background:#f5f7fa; padding: 40px;">
    <div style="max-width: 600px; margin: auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background:#ffb100; padding: 25px; text-align:center;">
        <h1 style="color:#000; margin:0; font-size:24px;">🎉 Registration Confirmed!</h1>
        <p style="color:#222; margin-top:8px; font-size:16px;">Digital Marketing Webinar</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size:16px; color:#333;">Hi <strong>${name}</strong>,</p>

        <p style="font-size:15px; color:#555; line-height:1.6;">
          Thank you for registering for our upcoming Digital Marketing Webinar!  
          We’re excited to have you join us.
        </p>

        <!-- Info Card -->
        <div style="background:#f9fafc; border:1px solid #e5e7eb; border-radius:10px; padding:20px; margin-top:20px;">
          <h3 style="margin:0 0 15px 0; font-size:18px; color:#111;">Your Details</h3>

          <p style="margin: 6px 0; font-size:15px; color:#333;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 6px 0; font-size:15px; color:#333;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 6px 0; font-size:15px; color:#333;"><strong>Email:</strong> ${email || "Not Provided"}</p>
          <p style="margin: 6px 0; font-size:15px; color:#333;"><strong>City:</strong> ${city}</p>
          <p style="margin: 6px 0; font-size:15px; color:#333;"><strong>Status:</strong> ${status}</p>
          <p style="margin: 6px 0; font-size:15px; color:#333;"><strong>Preferred Date:</strong> ${date}</p>
          <p style="margin: 6px 0; font-size:15px; color:#333;"><strong>Source:</strong> ${source}</p>
        </div>

        <p style="margin-top:20px; font-size:15px; color:#555; line-height:1.6;">
          We will send you the webinar link and WhatsApp reminders soon.
          If you have any questions, just reply to this email—we’re here to help!
        </p>


      </div>

    </div>
  </div>
`

    };

    await transporter.sendMail(receiptMail);

    res.json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
