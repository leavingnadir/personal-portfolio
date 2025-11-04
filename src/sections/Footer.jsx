import { FaInstagram, FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiZenodo } from "react-icons/si";

const socials = [
  { href: "https://www.instagram.com/hiruwa_xx/", icon: <FaInstagram /> },
  { href: "https://www.behance.net/hirusharanaweera", icon: <FaBehance /> },
  { href: "https://github.com/leavingnadir", icon: <FaGithub /> },
  { href: "https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ranaweera%2C%20Hirusha%22&l=list&p=1&s=10&sort=bestmatch", icon: <SiZenodo /> },
  { href: "https://www.linkedin.com/in/hirusha-ranaweera-480a91365/", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col justify-center items-center overflow-hidden" id="contact">
      <div className="relative z-10 flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight mb-6">
          Turn Your Vision Into Reality<br />
          Let’s Build Together!
        </h1>
        <p className="text-[#B3B6C6] text-lg md:text-xl text-center mb-10 max-w-2xl">
          Transform your concepts into tangible solutions. <br />
          I collaborate closely with you to craft designs, apps,<br />
           or projects that truly reflect your vision.
        </p>
        <a
          href="mailto:hello.hirusharanaweera@gmail.com"
          className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-[#23243a] bg-blue-500 text-white text-lg font-medium shadow-lg hover:bg-blue-600 mb-16"
        >
          Contact Me Now
          <span className="ml-2 text-xl">↗</span>
        </a>
      </div>

      <div className="relative z-10 flex flex-row gap-4 md:gap-6 mb-10">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#181A2A] border border-[#23243a] text-white text-2xl hover:bg-[#23243a] transition"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="relative z-10 w-full flex justify-center px-8 mb-10">
        <p className="text-[#B3B6C6] text-sm">Copyright ©2025 Hirusha Ranaweera</p>
      </div>
    </footer>
  );
};

export default Footer;
