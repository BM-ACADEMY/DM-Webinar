import { ArrowRightIcon, MailIcon, UserIcon, PhoneIcon, MapPinIcon, CalendarIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const sendToWhatsApp = () => {
        const whatsapp = "918270652229"; // YOUR NUMBER ✔

        const text = `
📌 *New Webinar Registration*
----------------------------------
👤 Name: ${form.name}
📞 WhatsApp Number: ${form.phone}
📧 Email: ${form.email || "Not Provided"}
🏙 City: ${form.city}
💼 Current Status: ${form.status}
📅 Preferred Date: ${form.date}
📣 Heard From: ${form.source}
        `;

        const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-24" id="contact">

            <SectionTitle
                text1="Webinar Details and Registration Form"
                text2="Save Your Seat – Free Webinar Registration"
                text3="Fill in your details to get the webinar link and WhatsApp reminders."
            />

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    sendToWhatsApp();
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-slate-100 mt-12 w-full"
            >

                <InputGlass
                    label="Full Name"
                    placeholder="Enter your full name"
                    Icon={UserIcon}
                    onChange={(v) => handleChange("name", v)}
                />

                <InputGlass
                    label="WhatsApp Number"
                    placeholder="Enter your WhatsApp number"
                    Icon={PhoneIcon}
                    onChange={(v) => handleChange("phone", v)}
                />

                <InputGlass
                    label="Email (Optional)"
                    placeholder="Enter your email"
                    Icon={MailIcon}
                    type="email"
                    onChange={(v) => handleChange("email", v)}
                />

                <InputGlass
                    label="City"
                    placeholder="Your city"
                    Icon={MapPinIcon}
                    onChange={(v) => handleChange("city", v)}
                />

                <SelectGlass
                    label="Current Status"
                    options={["Student", "Job Seeker", "Working Professional", "Business Owner", "Others"]}
                    onChange={(v) => handleChange("status", v)}
                />

                <SelectGlass
                    label="Preferred Date"
                    options={["6 December", "4 January"]}
                    Icon={CalendarIcon}
                    onChange={(v) => handleChange("date", v)}
                />

                <SelectGlass
                    label="How did you hear about us?"
                    options={["Instagram", "WhatsApp", "Friend", "YouTube", "Others"]}
                    onChange={(v) => handleChange("source", v)}
                />

                <motion.button
                    type="submit"
                    className="sm:col-span-2 w-full sm:w-max flex items-center justify-center sm:justify-start gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-3 rounded-full mx-auto sm:mx-0"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    Yes, I Want to Attend the Free Webinar
                    <ArrowRightIcon className="size-5" />
                </motion.button>

                <p className="text-xs sm:text-sm text-slate-400 sm:col-span-2 mt-2 text-center sm:text-left">
                    We respect your privacy. Your details will only be used for webinar updates and course information.
                </p>
            </form>
        </div>
    );
}

/* ------------------ Glass Input ------------------ */
function InputGlass({ label, placeholder, Icon, type = "text", onChange }) {
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
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full p-3 bg-transparent outline-none text-slate-100 placeholder-slate-400 text-sm sm:text-base"
                />
            </div>
        </motion.div>
    );
}

/* ------------------ Glass Select ------------------ */
function SelectGlass({ label, options, Icon, onChange }) {
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
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full p-3 bg-transparent outline-none text-slate-100 text-sm sm:text-base"
                >
                    <option value="">Select</option>
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
