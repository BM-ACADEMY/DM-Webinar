import { ArrowRightIcon, MailIcon, UserIcon, PhoneIcon, MapPinIcon, CalendarIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import axios from "axios";
import SectionTitle from "../components/SectionTitle";

export default function RegistrationSection() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        status: "",
        date: "",
        source: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        const apiUrl = import.meta.env.VITE_BASE_URL; 
        const scriptUrl = "https://script.google.com/macros/s/AKfycbz8Jt6ycHuDD8IhxS7WbKXjDFppBHqwC1mgXNM29bnoZigCWE5c12zz8KJehKYSvVrIug/exec"; // Update if redeploy changes it

        let sheetSuccess = false;
        let emailSuccess = false;
        let errors = [];

        try {
            const formData = new URLSearchParams(form);

            try {
                const sheetResponse = await axios.post(scriptUrl, formData, {
                    timeout: 15000,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                if (sheetResponse.status === 200) {
                    sheetSuccess = true;
                    console.log("Sheet submission successful:", sheetResponse.data);
                }
            } catch (sheetError) {
                console.error("Sheet submission error details:", {
                    message: sheetError.message,
                    status: sheetError.response?.status,
                    data: sheetError.response?.data,
                    code: sheetError.code
                });
                if (sheetError.code === 'ECONNABORTED') {
                    errors.push("Sheet timed out—check internet.");
                } else if (sheetError.response?.status === 403) {
                    errors.push("403 Forbidden: Redeploy Apps Script as 'Web app' with 'Execute as: Me' and 'Who has access: Anyone'. Test with curl.");
                } else if (sheetError.response?.status === 405) {
                    errors.push("405 Method Not Allowed: Ensure doPost(e) is defined.");
                } else {
                    errors.push(`Sheet failed: ${sheetError.response?.data?.message || sheetError.message}`);
                }
            }

            try {
                const emailResponse = await axios.post(`${apiUrl}/send-email`, form, { timeout: 15000 });
                if (emailResponse.status === 200) {
                    emailSuccess = true;
                    console.log("Email submission successful:", emailResponse.data);
                }
            } catch (emailError) {
                console.error("Email submission error:", emailError);
                if (emailError.code === 'ECONNABORTED') {
                    errors.push("Email timed out—check backend.");
                } else if (!apiUrl || apiUrl.includes('localhost')) {
                    errors.push("Email API not set—add VITE_BASE_URL to .env.");
                } else {
                    errors.push(`Email failed: ${emailError.response?.data?.message || emailError.message}`);
                }
            }

            // Set message based on results
            if (sheetSuccess && emailSuccess) {
                setSubmitMessage("Registration successful! Email sent & data saved to sheet.");
                resetForm();
            } else if (sheetSuccess) {
                setSubmitMessage("Data saved to sheet, but email failed. Check console.");
            } else if (emailSuccess) {
                setSubmitMessage("Email sent, but sheet save failed. Check console & redeploy script.");
            } else {
                setSubmitMessage(`Submission failed: ${errors.join('; ')}\nOpen F12 > Console/Network for details.`);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            setSubmitMessage(`Unexpected issue: ${error.message}. Refresh & retry.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setForm({
            name: "",
            phone: "",
            email: "",
            city: "",
            status: "",
            date: "",
            source: "",
        });
    };

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-24" id="contact">
            <SectionTitle
                text1="Webinar Details and Registration Form"
                text2="Save Your Seat – Free Webinar Registration"
                text3="Fill in your details to get the webinar link and WhatsApp reminders."
            />

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-slate-100 mt-12 w-full"
            >
                <InputGlass
                    label="Full Name *"
                    placeholder="Enter your full name"
                    Icon={UserIcon}
                    onChange={(v) => handleChange("name", v)}
                    value={form.name}
                    required
                />

                <InputGlass
                    label="WhatsApp Number *"
                    placeholder="Enter your WhatsApp number"
                    Icon={PhoneIcon}
                    onChange={(v) => handleChange("phone", v)}
                    value={form.phone}
                    required
                />

                <InputGlass
                    label="Email (Optional)"
                    placeholder="Enter your email"
                    Icon={MailIcon}
                    type="email"
                    onChange={(v) => handleChange("email", v)}
                    value={form.email}
                />

                <InputGlass
                    label="City *"
                    placeholder="Your city"
                    Icon={MapPinIcon}
                    onChange={(v) => handleChange("city", v)}
                    value={form.city}
                    required
                />

                <SelectGlass
                    label="Current Status *"
                    options={["Student", "Job Seeker", "Working Professional", "Business Owner", "Others"]}
                    onChange={(v) => handleChange("status", v)}
                    value={form.status}
                    required
                />

                <SelectGlass
                    label="Preferred Date *"
                    options={["6 December", "4 January"]}
                    Icon={CalendarIcon}
                    onChange={(v) => handleChange("date", v)}
                    value={form.date}
                    required
                />

                <SelectGlass
                    label="How did you hear about us? *"
                    options={["Instagram", "WhatsApp", "Friend", "YouTube", "Others"]}
                    onChange={(v) => handleChange("source", v)}
                    value={form.source}
                    required
                />

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="sm:col-span-2 w-full sm:w-max flex items-center justify-center sm:justify-start gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-500 text-white px-10 py-3 rounded-full mx-auto sm:mx-0"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    {isSubmitting ? "Submitting..." : "Yes, I Want to Attend the Free Webinar"}
                    <ArrowRightIcon className="size-5" />
                </motion.button>

                {submitMessage && (
                    <p className={`sm:col-span-2 mt-2 text-center sm:text-left ${submitMessage.includes("successful") ? "text-green-400" : "text-red-400"} whitespace-pre-wrap text-sm`}>
                        {submitMessage}
                    </p>
                )}

                <p className="text-xs sm:text-sm text-slate-400 sm:col-span-2 mt-2 text-center sm:text-left">
                    We respect your privacy. Your details will only be used for webinar updates and course information.
                </p>
            </form>
        </div>
    );
}

/* ------------------ Glass Input ------------------ */
function InputGlass({ label, placeholder, Icon, type = "text", onChange, value, required = false }) {
    return (
        <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250 }}
        >
            <p className="mb-1 font-medium text-sm sm:text-base">{label}</p>
            <div className="flex items-center pl-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-lg focus-within:border-yellow-400 transition">
                <Icon className="size-5 opacity-70" />
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full p-3 bg-transparent outline-none text-slate-100 placeholder-slate-400 text-sm sm:text-base"
                />
            </div>
        </motion.div>
    );
}

/* ------------------ Glass Select ------------------ */
function SelectGlass({ label, options, Icon, onChange, value, required = false }) {
    return (
        <motion.div
            className="col-span-1 sm:col-span-2"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250 }}
        >
            <p className="mb-1 font-medium text-sm sm:text-base">{label}</p>
            <div className="flex items-center pl-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-lg focus-within:border-yellow-400 transition">
                {Icon && <Icon className="size-5 opacity-70" />}
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full p-3 bg-transparent outline-none text-slate-100 text-sm sm:text-base"
                >
                    <option value="">Select an option</option>
                    {options.map((opt, i) => (
                        <option key={i} className="bg-slate-900 text-white" value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
        </motion.div>
    );
}