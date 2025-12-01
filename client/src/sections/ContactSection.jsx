import { ArrowRightIcon, MailIcon, UserIcon, PhoneIcon, MapPinIcon, CalendarIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; 
import Confetti from "react-confetti"; 
import SectionTitle from "../components/SectionTitle";

// Helper hook to get window size for Confetti
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                // Use clientWidth to exclude scrollbar width and prevent X overflow
                width: document.documentElement.clientWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize(); // Call immediate
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default function RegistrationSection() {
    const { width, height } = useWindowSize(); 
    const [showConfetti, setShowConfetti] = useState(false); 

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

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation: Phone Number
        if (form.phone.length !== 10) {
            toast.error("Please enter a valid 10-digit phone number.");
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading("Reserving your seat...");

        const apiUrl = import.meta.env.VITE_BASE_URL;
        const scriptUrl = "https://script.google.com/macros/s/AKfycbz8Jt6ycHuDD8IhxS7WbKXjDFppBHqwC1mgXNM29bnoZigCWE5c12zz8KJehKYSvVrIug/exec";

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
                const emailResponse = await axios.post(`${apiUrl}/mail/send-email`, form, { timeout: 15000 });
                if (emailResponse.status === 200) emailSuccess = true;
            } catch (error) {
                console.error("Email Error:", error);
            }

            // Handle Results
            toast.dismiss(loadingToast); 

            if (sheetSuccess && emailSuccess) {
                toast.success("Registration Successful!");
                triggerConfetti();
                resetForm();
            } else if (sheetSuccess || emailSuccess) {
                toast.success("Registration Saved.");
                triggerConfetti();
                resetForm();
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

    const triggerConfetti = () => {
        setShowConfetti(true);
        // Stop confetti after 6 seconds
        setTimeout(() => setShowConfetti(false), 6000);
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
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 pt-0 relative" id="contact">
            
            {/* Toast Container */}
            <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

            {/* Confetti Overlay - Fixed to screen, no overflow, clicks pass through */}
            {showConfetti && (
                <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
                    <Confetti
                        width={width}
                        height={height}
                        recycle={false}
                        numberOfPieces={500}
                        gravity={0.2}
                        style={{ position: 'fixed', top: 0, left: 0 }}
                    />
                </div>
            )}

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

                <p className="pl-10 text-xs sm:text-sm text-slate-400 sm:col-span-2 mt-2 text-center sm:text-left">
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