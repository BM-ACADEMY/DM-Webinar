require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// ===== PROFESSIONAL CORS HANDLING =====

// Whitelisted frontend origins
const allowedOrigins = [
  process.env.CLIENT_URL,         
  process.env.CLIENT_URL_PROD       
].filter(Boolean); // remove undefined

app.use(cors({
  origin: function (origin, callback) {
    // Allow non-browser tools like Postman
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS blocked: Unauthorized origin"), false);
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

// ===== SMTP Transporter (Zoho) =====
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) console.error("SMTP Error:", error);
  else console.log("✅ SMTP Ready");
});

// ===== Root Route =====
app.get("/", (req, res) => {
  res.send("🚀 Webinar Form Backend Running!");
});

// ===== Send Email Route =====
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, city, status, date, source } = req.body;

    if (!name || !phone || !date) {
      return res.status(400).json({ message: "Required fields missing!" });
    }

    const receiptMail = {
      from: process.env.EMAIL_USER,
      to: email || process.env.EMAIL_USER,
      subject: "🎉 Webinar Registration Received!",
      html: `
        <div style="font-family: Arial; background:#f5f7fa; padding: 40px;">
          <div style="max-width:600px; margin:auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.1);">
            <div style="background:#ffb100; padding:25px; text-align:center;">
              <h1 style="color:#000; margin:0; font-size:24px;">🎉 Registration Confirmed!</h1>
              <p style="color:#222; margin-top:8px; font-size:16px;">Digital Marketing Webinar</p>
            </div>
            <div style="padding:30px;">
              <p style="font-size:16px; color:#333;">Hi <strong>${name}</strong>,</p>
              <p style="font-size:15px; color:#555; line-height:1.6;">
                Thank you for registering! We're excited to have you join us.
              </p>
              <div style="background:#f9fafc; border:1px solid #e5e7eb; border-radius:10px; padding:20px; margin-top:20px;">
                <h3 style="margin:0 0 15px; font-size:18px; color:#111;">Your Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email || "Not Provided"}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Preferred Date:</strong> ${date}</p>
                <p><strong>Source:</strong> ${source}</p>
              </div>
              <p style="margin-top:20px; color:#555;">
                Webinar link & updates will be shared soon. Feel free to reply if you have queries!
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

// ===== Start Server =====
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
