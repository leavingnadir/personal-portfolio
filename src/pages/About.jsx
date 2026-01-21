import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

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
    <section className="px-4 md:px-8 py-16 md:py-24 mx-auto max-w-[1280px] mt-30" id="about">
      <h2 className="text-heading text-center md:text-left">About Me</h2>

      <div className="max-w-[95%] lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center md:mt-32 px-2 sm:px-4">
        {/* Text Section */}
        <div className="w-full lg:w-3xl">
          <p className="text-base sm:text-lg text-gray-400 mb-4 text-center md:text-left max-w-[600px] md:max-w-none mx-auto md:mx-0">
            I’m <span className="font-semibold text-rose-400">Hirusha Ranaweera</span>, 
            a 1st-year BSc(Hons) Information Technology undergraduate at SLIIT, passionate about Full stack Web/SaaS Development,
            DevOps, Cloud, Security and CyberOps. Originally from Kandy and now living in Malabe.
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-4 text-center md:text-left">
            I’m exploring modern IT fields including Quantum computing, Blockchain, Web3.0. 
            Alongside academics, I work as a freelance developer and previously contributed
            as a web developer at Chasm Clothing and Video Editor at ZoomOut. I’m also the{" "}
            <span className="font-semibold text-rose-400">founder</span> of{" "}
            <a
              href="https://www.linkedin.com/company/leaving-nadir/"
              target="_blank"
              className="font-semibold text-rose-400 hover:underline"
            >
              Leaving Nadir LLP ↗
            </a>{" "}
            .
          </p>

          <p className="text-base sm:text-lg text-gray-400 text-center md:text-left">
            I have published two papers on Web3, Blockchain, and DApp development, which allowed
            me to contribute to the growing discourse on decentralized technologies. With a drive for continuous learning and innovation, my mission
            is to explore, create, and bring forward new ideas that shape the future of technology in the country.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <TiltedCard
            imageSrc="/assets/me.png"
            altText="Hirusha Ranaweera"
            captionText="Hirusha Ranaweera"
            containerHeight="260px"
            containerWidth="260px"
            imageHeight="260px"
            imageWidth="260px"
            rotateAmplitude={10}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
