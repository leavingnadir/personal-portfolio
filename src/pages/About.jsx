import { useRef, useState } from 'react';
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
    captionText = '',
    containerHeight = '300px',
    containerWidth = '100%',
    imageHeight = '300px',
    imageWidth = '300px',
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false
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
        style={{
          height: containerHeight,
          width: containerWidth
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showMobileWarning && (
          <div className="absolute top-4 text-center text-sm block sm:hidden">
            This effect is not optimized for mobile. Check on desktop.
          </div>
        )}

        <motion.div
          className="relative [transform-style:preserve-3d]"
          style={{
            width: imageWidth,
            height: imageHeight,
            rotateX,
            rotateY,
            scale
          }}
        >
          <motion.img
            src={imageSrc}
            alt={altText}
            className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
            style={{
              width: imageWidth,
              height: imageHeight
            }}
          />

          {displayOverlayContent && overlayContent && (
            <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
              {overlayContent}
            </motion.div>
          )}
        </motion.div>

        {showTooltip && (
          <motion.figcaption
            className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
            style={{
              x,
              y,
              opacity,
              rotate: rotateFigcaption
            }}
          >
            {captionText}
          </motion.figcaption>
        )}
      </figure>
    );
  }

  // ----- About Section -----
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 mx-auto max-w-[1280px]" id="about" >
      <h2 className="text-heading text-center mb-12 mt-30">About Me</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Text Section */}
        <div className="w-full text-center md:text-left mb-10">
          <p className="text-base sm:text-lg text-gray-400 mb-4">
            I’m <span className="font-semibold text-rose-400">Hirusha Ranaweera</span>, 
            a 1st-year BSc(Hons) Information Technology undergraduate at SLIIT, passionate about Full stack Web/SaaS Development,
            DevOps, Cloud, Security and CyberOps. Originally from Kandy and now living in Malabe.
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-4 max-w-xl mx-auto md:mx-0">
            I’m exploring modern IT fields including Quantum computing, Blockchain, Web3.0. 
            Alongside academics, I work as a freelance developer and previously contributed
            as a web developer at Chasm Clothing and Video Editor at ZoomOut. I’m also the{" "}
            <span className="font-semibold text-rose-400">founder</span> of{" "}
            <a
              href="https://www.linkedin.com/company/leaving-nadir/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose-400 hover:underline"
            >
              Leaving Nadir LLP ↗
            </a>.
          </p>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
            I have published two papers on Web3, Blockchain, and DApp development, which allowed
            me to contribute to the growing discourse on decentralized technologies. With a drive for continuous learning and innovation, my mission
            is to explore, create, and bring forward new ideas that shape the future of technology in the country.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <TiltedCard
            imageSrc="/assets/me.png"
            altText="Hirusha Ranaweera"
            captionText="Hirusha Ranaweera"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={10}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>




      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-rose-500 mb-2">
              Founder & CEO
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Building the future with{" "}
              <span className="text-rose-500">Leaving Nadir</span>
            </h2>

            <p className="text-neutral-400 leading-relaxed mb-6">
              I’m the founder and CEO of <span className="text-white font-medium">Leaving Nadir</span>, a
              digital innovation brand focused on building scalable, secure, and visually compelling
              technology solutions. My mission is to merge design, engineering, and strategy to create
              impactful digital experiences that solve real-world problems.
            </p>

            <p className="text-neutral-400 leading-relaxed mb-10">
              Leaving Nadir turn visionary ideas into intelligent digital realities. Guided by innovation and
              inspired by Sri Lanka’s legacy of creativity. From concept to deployment, we design systems that
              empower the next generation of progress.
            </p>

            {/* Facts / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-white">2024</p>
                <p className="text-sm text-neutral-400">Founded</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-sm text-neutral-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Sri Lanka</p>
                <p className="text-sm text-neutral-400">Based</p>
              </div>
            </div>
          </div>

          {/* Right: Logo + Visual Card */}
          <div className="relative flex justify-center">
            <div className="relative bg-gradient-to-br from-midnight to-navy border border-white/10 rounded-2xl p-10 shadow-xl max-w-md w-full">

              {/* Logo */}
              <img
                src="/assets/ln-logo.png"
                alt="Leaving Nadir Logo"
                className="invert brightness-200 w-33 h-33 object-contain mx-auto mb-6"
              />

              <h3 className="text-xl font-semibold text-white text-center mb-2">
                Leaving Nadir
              </h3>

              <p className="text-neutral-400 text-center mb-6">
                SaaS Dev • Application Dev • Cloud Sec
                Database Dev • Information Security • Web Dev
                CyberOps • DevOps • IT Consulting
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-50 mb-30">
        {gallery.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg group ${
              img.type === "portrait" ? "row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white text-lg font-semibold text-center px-2">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
