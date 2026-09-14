/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaSteam,
  FaXbox
} from "react-icons/fa";
import { SiBehance, SiMedium, SiEpicgames } from "react-icons/si";
import { motion, useMotionValue, useSpring } from 'motion/react';
import { gallery } from "../constants";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

const About = () => {
  // ----- TiltedCard component logic -----
  function TiltedCard({
    imageSrc,
    altText = 'Tilted card image',
    containerHeight = '320px',
    containerWidth = '100%',
    imageHeight = '320px',
    imageWidth = '320px',
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = false,
    showTooltip = true,
    displayOverlayContent = false,
    overlayContent = null
  }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
      stiffness: 350,
      damping: 30,
      mass: 1
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
      const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

      rotateX.set(rotationX);
      rotateY.set(rotationY);
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);

      const velocityY = offsetY - lastY;
      rotateFigcaption.set(-velocityY * 0.6);
      setLastY(offsetY);
    }

    function handleMouseEnter() {
      scale.set(scaleOnHover);
      opacity.set(1);
    }

    function handleMouseLeave() {
      opacity.set(0);
      scale.set(1);
      rotateX.set(0);
      rotateY.set(0);
      rotateFigcaption.set(0);
    }

    return (
      <figure
        ref={ref}
        className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
        style={{ height: containerHeight, width: containerWidth }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showMobileWarning && (
          <div className="absolute top-4 text-center text-xs font-mono text-violet block sm:hidden">
            // MOBILE_VIEW_ACTIVE
          </div>
        )}

        <motion.div
          className="relative [transform-style:preserve-3d] rounded-2xl p-2 bg-gradient-to-br from-violet/20 via-indigo/20 to-transparent border border-white/10 shadow-2xl"
          style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
        >
          <motion.img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover rounded-xl filter brightness-95 will-change-transform [transform:translateZ(0)]"
          />
          {displayOverlayContent && overlayContent && (
            <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
              {overlayContent}
            </motion.div>
          )}
        </motion.div>

        {showTooltip && (
          <motion.figcaption
            className="pointer-events-none absolute left-0 top-0 rounded bg-midnight border border-violet/40 px-2.5 py-1 font-mono text-[11px] text-neon opacity-0 z-[3] hidden sm:block shadow-lg"
            style={{ x, y, opacity, rotate: rotateFigcaption }}
          >
            SYS_USER: {altText}
          </motion.figcaption>
        )}
      </figure>
    );
  }

  return (
    <section className="px-4 md:px-8 py-24 mx-auto max-w-[1280px] relative mt-10" id="about">
      
      {/* Section Heading */}
      <div className="text-center mb-20">
        <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
          // IDENTITY & BACKGROUND DOSSIER
        </span>
        <h2 className="text-heading text-white">About Me</h2>
      </div>

      {/* Main Bio Terminal Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Profile Image Column */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltedCard
            imageSrc="/assets/me.png"
            altText="Hirusha Ranaweera"
            containerHeight="320px"
            containerWidth="320px"
            imageHeight="320px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
          />
        </div>

        {/* Text Terminal Column */}
        <div className="lg:col-span-7 relative p-8 rounded-3xl bg-midnight border border-white/5 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet animate-pulse" />
              <span>OPERATIVE_PROFILE.LOG</span>
            </div>
            <span className="text-neon">[ACTIVE]</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base font-normal text-neutral-300 leading-relaxed relative z-10">
            <p>
              I’m <span className="font-mono font-semibold text-neon">Hirusha Ranaweera</span>, a 2nd-year BSc(Hons) Information Technology undergraduate at SLIIT, passionate about Full-stack Web/SaaS Development, DevOps, Cloud, Security, and CyberOps. Originally from Kandy and now living in Malabe.
            </p>

            <p>
              I’m exploring modern IT fields including Quantum computing, Blockchain, and Web3.0. Alongside academics, I work as a freelance developer and previously contributed as a web developer at Chasm Clothing and Video Editor at ZoomOut. I’m also the <span className="font-mono font-semibold text-neon">founder</span> of{" "}
              <a
                href="https://www.linkedin.com/company/leaving-nadir/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-violet hover:text-neon underline transition-colors"
              >
                Leaving Nadir LLP ↗
              </a>.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm pt-2 border-t border-white/5">
              I have published two papers on Web3, Blockchain, and DApp development, contributing to decentralized technologies. My mission is to explore, create, and bring forward new tech ideas shaping the future.
            </p>
          </div>
        </div>
      </div>

      {/* Social Network Grid */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-sm font-mono uppercase tracking-widest text-violet">
            // NETWORK CHANNELS & FEEDS
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-stretch">
          {[
            { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hirusha-ranaweera-480a91365/" },
            { name: "GitHub", icon: <FaGithub />, url: "https://github.com/leavingnadir" },
            { name: "Behance", icon: <SiBehance />, url: "https://www.behance.net/hirusharanaweera" },
            { name: "Medium", icon: <SiMedium />, url: "https://medium.com/@leavingnadir.inc" },
            { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/hiruwa_xx/" },
            { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=100091334018086" },
            { name: "Discord", icon: <FaDiscord />, url: "https://discord.com/users/ultima" },
            { name: "Steam", icon: <FaSteam />, url: "https://steamcommunity.com/id/ultimasl/" },
            { name: "Epic Games", icon: <SiEpicgames />, url: "https://www.epicgames.com/id/ultimasl" },
            { name: "Xbox", icon: <FaXbox />, url: "https://account.xbox.com/en-us/Profile?gamertag=ultima" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 flex flex-col items-center justify-center rounded-2xl bg-midnight border border-white/5 hover:border-violet/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 text-3xl mb-3 text-neutral-300 group-hover:text-neon transition-colors">
                {social.icon}
              </div>
              <span className="relative z-10 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Leaving Nadir Showcase Card */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="relative rounded-3xl bg-midnight border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-violet font-mono text-xs uppercase tracking-widest block mb-2">
                // FOUNDER & CEO
              </span>
              <h3 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-6">
                Building the future with <span className="text-neon">Leaving Nadir</span>
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                I’m the founder and CEO of <span className="text-white font-semibold">Leaving Nadir</span>, a digital innovation brand focused on building scalable, secure, and visually compelling technology solutions. My mission is to merge design, engineering, and strategy to create impactful digital experiences that solve real-world problems.
              </p>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
                Leaving Nadir turns visionary ideas into intelligent digital realities. Guided by innovation and inspired by Sri Lanka’s legacy of creativity. From concept to deployment, we design systems that empower the next generation of progress.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                <div>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-white">2019</p>
                  <p className="text-xs font-mono text-neutral-500 uppercase mt-0.5">Founded</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-white">15+</p>
                  <p className="text-xs font-mono text-neutral-500 uppercase mt-0.5">Delivered</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-white">LK</p>
                  <p className="text-xs font-mono text-neutral-500 uppercase mt-0.5">Base</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative bg-indigo/40 border border-white/10 rounded-2xl p-8 shadow-xl max-w-sm w-full flex flex-col items-center text-center">
                <img
                  src="/assets/ln-logo.png"
                  alt="Leaving Nadir Logo"
                  className="invert brightness-200 w-24 h-24 object-contain mb-6 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
                <h4 className="text-lg font-mono font-semibold text-white mb-2">
                  Leaving Nadir
                </h4>
                <p className="text-neutral-400 text-xs font-mono leading-relaxed">
                  SaaS Dev • Application Dev • Cloud Sec • Database Dev • Information Security • Web Dev • CyberOps • DevOps • IT Consulting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-sm font-mono uppercase tracking-widest text-violet">
            // VISUAL ARTIFACTS GALLERY
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        {/* Masonry Column Layout to fix portrait sizing */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-midnight border border-white/5 group shadow-xl break-inside-avoid w-full"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ${
                  img.type === "portrait" ? "h-[480px]" : "h-[240px]"
                }`}
              />

              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-neon font-mono text-xs tracking-wider">
                  // {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;