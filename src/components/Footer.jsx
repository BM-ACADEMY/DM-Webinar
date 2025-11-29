import { Link } from "react-router-dom";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import logo from "../assets/BM_ACADEMY-.png";
import { footerData } from "../data/footer";

export default function Footer() {
    return (
        <footer className="w-full mt-40 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-gray-300 px-6 md:px-16 lg:px-24 xl:px-32 py-12">

            {/* GRID: 3 columns + map */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* COLUMN 1 — COMPANY INFO */}
                <div>
                    <p className="text-xl font-bold">
                        <span className="text-white">BM </span>
                        <span className="text-yellow-500">ACADEMY</span>
                    </p>

                    <p className="mt-4 leading-relaxed text-sm text-gray-400">
                        BM Academy is a multi-vertical training institute empowering 
                        students through Digital Marketing, AI tools, Software Development, 
                        and Skill Training — built on integrity, innovation, and real-world skills.
                    </p>
                </div>

                {/* COLUMN 2 — QUICK LINKS (FROM footerData) */}
                <div>
                    <p className="text-lg font-semibold text-white">Quick Links</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        {footerData[0].links.map((link, i) => (
                            <li key={i}>
                                <a href={link.href} className="hover:text-yellow-500">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COLUMN 3 — SOCIAL MEDIA */}
                <div>
                    <p className="text-lg font-semibold text-white">Social Media</p>

                    <div className="flex flex-col gap-3 mt-4 text-sm">

                        {/* FACEBOOK */}
                        <a
                            href="https://www.facebook.com/people/BM-Academy/61566753898165/"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-yellow-500"
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
                            className="flex items-center gap-2 hover:text-yellow-500"
                        >
                            <LinkedinIcon className="size-5" /> LinkedIn
                        </a>

                        {/* YOUTUBE */}
                        <a
                            href="https://www.youtube.com/@bmacademypondy"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-yellow-500"
                        >
                            <YoutubeIcon className="size-5" /> YouTube
                        </a>

                        {/* INSTAGRAM */}
                        <a
                            href="https://www.instagram.com/bmacademypondy"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-yellow-500"
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
                    ></iframe>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="w-full border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} BM Techx — All Rights Reserved.
            </div>
        </footer>
    );
}
