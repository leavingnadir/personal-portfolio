/* eslint-disable react/jsx-no-comment-textnodes */
import { FaInstagram, FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiZenodo } from "react-icons/si";
import { FiMail, FiArrowUpRight, FiTerminal } from "react-icons/fi";

const socials = [
  { href: "https://www.instagram.com/hiruwa_xx/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://www.behance.net/hirusharanaweera", icon: <FaBehance />, label: "Behance" },
  { href: "https://github.com/leavingnadir", icon: <FaGithub />, label: "GitHub" },
  { href: "https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ranaweera%2C%20Hirusha%22&l=list&p=1&s=10&sort=bestmatch", icon: <SiZenodo />, label: "Zenodo Research" },
  { href: "https://www.linkedin.com/in/hirusha-ranaweera-480a91365/", icon: <FaLinkedin />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col justify-center items-center overflow-hidden pt-24 pb-12 px-4 md:px-8 border-t border-white/5" id="contact">
      
      {/* Ambient background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Call to Action Card */}
      <div className="relative z-10 max-w-4xl w-full mx-auto p-8 sm:p-14 rounded-3xl bg-midnight border border-white/10 shadow-2xl backdrop-blur-xl mb-16 text-center overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet/5 rounded-full blur-3xl pointer-events-none" />

        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/40 border border-violet/30 font-mono text-xs text-neutral-300 uppercase mb-6 tracking-wider">
          <FiTerminal className="text-violet" />
          <span>COMM_CHANNEL: OPEN_FOR_TRANSMISSION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight leading-tight mb-6">
          Turn Your Vision Into Reality.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">
            Let’s Build Together.
          </span>
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed font-sans">
          Transform your concepts into tangible digital solutions. I collaborate closely with you to craft architectures, applications, or secure platforms that reflect your vision.
        </p>

        <a
          href="mailto:hello.hirusharanaweera@gmail.com"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-violet hover:bg-violet/80 text-white font-mono text-xs tracking-widest uppercase shadow-xl shadow-violet/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <FiMail className="size-4" />
          <span>Initiate Contact</span>
          <FiArrowUpRight className="size-4" />
        </a>
      </div>

      {/* Social Media Grid Node */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-12">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.label}
            className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-midnight border border-white/10 hover:border-violet/50 text-neutral-300 hover:text-neon text-xl shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              {social.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Footer Bottom Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between max-w-6xl px-4 pt-8 border-t border-white/5 text-xs font-mono text-neutral-500">
        <p>Copyright © 2026 Hirusha Ranaweera. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 text-violet">// LEAVING_NADIR_SYSTEMS</p>
      </div>
    </footer>
  );
};

export default Footer;