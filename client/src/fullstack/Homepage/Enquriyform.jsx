import { ArrowRightIcon, MailIcon, UserIcon, PhoneIcon, MapPinIcon, CalendarIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; 
import SectionTitle from "../../components/SectionTitle";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

export default function RegistrationSection() {
    const navigate = useNavigate(); // 2. Initialize Hook
    
    const [form, setForm] = useState({
        name: "", phone: "", email: "", city: "", status: "", date: "", source: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (form.phone.length !== 10) {
            toast.error("Please enter a valid 10-digit phone number.");
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading("Reserving your seat...");

        const apiUrl = import.meta.env.VITE_BASE_URL;
        // Note: It is safer to move this URL to an environment variable as well
        const scriptUrl = "https://script.google.com/macros/s/AKfycbzCCtAecM5yZOWjiPhkonAzKIFw2d24-DfGereQYB-Hztgixk1qErOnbkejYDzxl-E/exec";

        let sheetSuccess = false;
        let emailSuccess = false;

        try {
            const formData = new URLSearchParams(form);

            // 1. Submit to Google Sheet
            try {
                const sheetResponse = await axios.post(scriptUrl, formData, {
                    timeout: 15000,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                if (sheetResponse.status === 200) sheetSuccess = true;
            } catch (error) {
                console.error("Sheet Error:", error);
            }

            // 2. Submit Email
            try {
                const emailResponse = await axios.post(`${apiUrl}/landing/send-email-fsd`, form, { timeout: 15000 });
                if (emailResponse.status === 200) emailSuccess = true;
            } catch (error) {
                console.error("Email Error:", error);
            }

            toast.dismiss(loadingToast); 

            // 3. Logic for Redirection
            if (sheetSuccess && emailSuccess) {
                toast.success("Registration Successful!");
                setForm({ name: "", phone: "", email: "", city: "", status: "", date: "", source: "" });
                
                // Redirect to Thank You Page
                navigate("/thank-you"); 

            } else if (sheetSuccess || emailSuccess) {
                toast.success("Registration Saved.");
                setForm({ name: "", phone: "", email: "", city: "", status: "", date: "", source: "" });
                
                // Redirect even on partial success (optional)
                navigate("/thank-you"); 

            } else {
                toast.error("Submission failed. Please check your connection.");
            }

        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error(`Unexpected error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 pt-0 relative overflow-x-hidden" id="contact">
            
            <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

            <SectionTitle
                text1="Registration Form"
                text2="Save Your Seat – Free Webinar Registration"
                text3="Fill in your details to get the webinar link and WhatsApp reminders."
            />

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-slate-100 mt-12 w-full"
            >
                {/* Inputs */}
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
                    placeholder="Enter 10-digit number"
                    Icon={PhoneIcon}
                    value={form.phone}
                    required
                    onChange={(v) => {
                        const numericValue = v.replace(/\D/g, '').slice(0, 10);
                        handleChange("phone", numericValue);
                    }}
                    type="tel"
                />

                <InputGlass
                    label="Email *"
                    placeholder="Enter your email"
                    Icon={MailIcon}
                    type="email"
                    onChange={(v) => handleChange("email", v)}
                    value={form.email}
                    required
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
                    options={["27 December"]}
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

                {/* Submit Button */}
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

                <p className="pl-10 text-xs sm:text-sm text-slate-400 sm:col-span-2 mt-2 text-center sm:text-left">
                    We respect your privacy. Your details will only be used for webinar updates and course information.
                </p>
            </form>
        </div>
    );
}

/* ------------------ Glass Input Components ------------------ */
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
                    style={{ colorScheme: "dark" }}
                    className="w-full p-3 bg-transparent outline-none text-slate-100 text-sm sm:text-base cursor-pointer"
                >
                    <option value="" className="text-slate-400 bg-neutral-900">Select an option</option>
                    {options.map((opt, i) => (
                        <option key={i} className="bg-neutral-900 text-white" value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
        </motion.div>
    );
}