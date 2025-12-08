import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import logo from "../../assets/BM_ACADEMY-.png";

export default function Footer() {
    return (
        <footer id="contact" className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#111] text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 py-12">

            {/* GRID: 3 columns + map */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* COLUMN 1 — COMPANY INFO */}
                <div>
                    {/* LOGO */}
                    <img
                        src={logo}
                        alt="BM Academy Logo"
                        className="h-16 w-auto object-contain mb-4"
                    />

                    <p className="mt-4 leading-relaxed text-sm text-gray-400">
                        BM Academy is a multi-vertical training institute empowering
                        students through Digital Marketing, AI tools, Software Development,
                        and Skill Training — built on integrity, innovation, and real-world skills.
                    </p>
                </div>

                {/* COLUMN 2 — QUICK LINKS (Updated with href) */}
                <div>
                    <p className="text-lg font-semibold text-yellow-500">Quick Links</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>
                            <a href="#home" className="hover:text-yellow-500 transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#whyai" className="hover:text-yellow-500 transition-colors">
                                Why AI
                            </a>
                        </li>
                        <li>
                            <a href="#whychoose" className="hover:text-yellow-500 transition-colors">
                                Why Choose
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="hover:text-yellow-500 transition-colors">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                {/* COLUMN 3 — SOCIAL MEDIA */}
                <div>
                    <p className="text-lg font-semibold text-yellow-500">Social Media</p>

                    <div className="flex flex-col gap-3 mt-4 text-sm">

                        {/* FACEBOOK */}
                        <a
                            href="https://www.facebook.com/people/BM-Academy/61566753898165/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                        >
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 2 .1v2.2h-1.1c-1 0-1.3.6-1.3 1.2V12h2.4l-.4 3h-2v7A10 10 0 0 0 22 12" />
                            </svg>
                            Facebook
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://www.linkedin.com/company/bm-academypondy/about/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                        >
                            <LinkedinIcon className="size-5" /> LinkedIn
                        </a>

                        {/* YOUTUBE */}
                        <a
                            href="https://www.youtube.com/@bmacademypondy"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                        >
                            <YoutubeIcon className="size-5" /> YouTube
                        </a>

                        {/* INSTAGRAM */}
                        <a
                            href="https://www.instagram.com/bmacademypondy"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                        >
                            <InstagramIcon className="size-5" /> Instagram
                        </a>

                    </div>
                </div>

                {/* COLUMN 4 — MAP */}
                <div className="flex justify-end">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.3780506685184!2d79.83549439427041!3d11.960920044388654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53636a1752dc05%3A0xaa5795ccc1815bf7!2sBM%20Academy%20-%20Digital%20Marketing%2C%20Full%20Stack%20Development%2C%20IT%20%26%20Skill%20Training%20Institute!5e1!3m2!1sen!2sin!4v1764400323205!5m2!1sen!2sin"
                        className="w-full md:w-[280px] h-[200px] rounded-xl border border-gray-700 shadow-md"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="BM Academy Location"
                    ></iframe>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="w-full border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-200">
                © {new Date().getFullYear()} <a
                    href="https://bmtechx.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 transition"
                >
                    BMTechx.in
                </a>
                — All Rights Reserved.
            </div>

        </footer>
    );
}