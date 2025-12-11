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
                width: document.documentElement.clientWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
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
        const scriptUrl = "https://script.google.com/macros/s/AKfycby_poutJdYw3AYBdpgdlEi5XQmJKr6psrmnNvYLLO31A95Rv1X4LPaLzHDF8RBBYf0Osw/exec";

        let sheetSuccess = false;
        let emailSuccess = false;

        try {
            // --- CHANGE START: Add the formType 'fsd' here ---
            // We create a new object combining the form data and the identifier
            const sheetData = { ...form, formType: "fsd" }; 
            
            const formData = new URLSearchParams(sheetData);
            // --- CHANGE END ---

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
            // (Note: If your email backend needs to know this is FSD, send sheetData instead of form)
            try {
                const emailResponse = await axios.post(`${apiUrl}/webinarfsd/send-email-fsd`, form, { timeout: 15000 });
                if (emailResponse.status === 200) emailSuccess = true;
            } catch (error) {
                console.error("Email Error:", error);
            }

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
        // --- CHANGED: Added bg-black and relative positioning for vector background ---
        <section className="relative w-full bg-black py-20 overflow-hidden" id="contact">
            
            {/* --- NEW: Background Vector & Effects --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 1. Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* 2. Top Center Light Glow (Spotlight) */}
                <div className="absolute left-0 right-0 top-[-10%] h-[500px] w-full bg-yellow-500/10 blur-[120px] rounded-full mx-auto max-w-3xl"></div>

                {/* 3. The "Light Vector" SVG Curve */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                        d="M0 100 C 20 0 50 0 100 100 Z" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="0.5"
                    />
                    <path 
                        d="M0 100 C 50 20 80 50 100 0" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="0.5" 
                        className="path-animate" // You can add CSS animation here if desired
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#EAB308" /> {/* Yellow-500 */}
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Content Container (z-10 to sit above background) */}
            <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

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
                    text1="Registration Form"
                    text2="Save Your Seat – Free Webinar Registration"
                    text3="Fill in your details to get the webinar link and WhatsApp reminders."
                />

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-slate-100 mt-12 w-full backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl bg-black/40"
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
                        options={["6 December", "27 December"]}
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
                        className="sm:col-span-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-10 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all transform hover:scale-[1.02]"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250 }}
                    >
                        {isSubmitting ? "Submitting..." : "Yes, I Want to Attend the Free Webinar"}
                        <ArrowRightIcon className="size-5" />
                    </motion.button>

                    <p className="text-xs text-slate-500 sm:col-span-2 mt-2 text-center">
                        We respect your privacy. Your details will only be used for webinar updates.
                    </p>
                </form>
            </div>
        </section>
    );
}

/* ------------------ Glass Input ------------------ */
function InputGlass({ label, placeholder, Icon, type = "text", onChange, value, required = false }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group"
        >
            <p className="mb-2 font-medium text-sm text-slate-300 group-hover:text-yellow-400 transition-colors">{label}</p>
            <div className="flex items-center pl-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md focus-within:border-yellow-500/50 focus-within:bg-white/10 transition-all duration-300">
                <Icon className="size-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors" />
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full p-3.5 bg-transparent outline-none text-slate-100 placeholder-slate-500 text-sm font-light"
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
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group sm:col-span-2" // Corrected duplicate className
        >
            <p className="mb-2 font-medium text-sm text-slate-300 group-hover:text-yellow-400 transition-colors">{label}</p>
            <div className="flex items-center pl-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md focus-within:border-yellow-500/50 focus-within:bg-white/10 transition-all duration-300">
                {Icon && <Icon className="size-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors" />}
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    style={{ colorScheme: "dark" }}
                    className="w-full p-3.5 bg-transparent outline-none text-slate-100 text-sm cursor-pointer [&>option]:bg-black [&>option]:text-slate-200"
                >
                    <option value="" className="text-slate-500">Select an option</option>
                    {options.map((opt, i) => (
                        <option key={i} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
        </motion.div>
    );
}