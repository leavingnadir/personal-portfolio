import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import TiltedCard from '../components/TiltedCard';
  
const About = () => {
  const grid2Container = useRef();
  return (
    <section
  className="px-4 md:px-8 py-16 md:py-24 mx-auto max-w-[1280px]"
  id="about"
>
  <h2 className="text-heading text-center md:text-left">About Me</h2>

  {/* First Grid Section */}
  <div className="grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-8 md:mt-12">
    {/* Grid 1 */}
    <div className="relative flex items-end justify-center md:justify-start grid-default-color grid-1 p-4">
      <img
        src="assets/coding-pov.png"
        className="absolute scale-[2.2] sm:scale-[1.5] right-0 top-0 md:scale-[2.5] md:right-[-2rem] md:top-[-1rem] lg:right-[-5rem]"
      />
      <div className="z-10 text-center md:text-left">
        <p className="headtext text-xl sm:text-2xl">Hi, I’m Hirusha Ranaweera</p>
        <p className="subtext text-sm sm:text-base">
          Over the last 4 years, I developed my design, editing, frontend and backend dev
          skills to deliver dynamic software and web applications.
        </p>
      </div>
      <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/3 bg-gradient-to-t from-indigo" />
    </div>

    {/* Grid 2 */}
    <div className="grid-default-color grid-2">
      <div
        ref={grid2Container}
        className="relative flex items-center justify-center w-full h-full"
      >
        <p className=" sm:flex items-end text-2xl sm:text-5xl text-gray-500">
          CODE IS CRAFT
        </p>
        {/* Cards shrink on mobile */}
        <Card
          style={{ rotate: "75deg", top: "20%", left: "20%" }}
          text="REST APIs"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-30deg", top: "55%", left: "45%" }}
          text="OOP"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "90deg", bottom: "30%", left: "65%" }}
          text="Full Stack"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "30deg", top: "70%", left: "70%" }}
          image="assets/logos/java.svg"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-45deg", top: "70%", left: "25%" }}
          image="assets/logos/typescript-icon.svg"
          containerRef={grid2Container}
        />
        <Card
          style={{ rotate: "-45deg", top: "5%", left: "10%" }}
          image="assets/logos/git.svg"
          containerRef={grid2Container}
        />
      </div>
    </div>

    {/* Grid 3 */}
    <div className="grid-black-color grid-3 flex flex-col justify-center p-4 relative min-h-[250px] md:min-h-0">
      <div className="z-10 mb-35 md:w-[50%]">
        <p className="headtext text-lg sm:text-xl mb-2">Time Zone</p>
        <p className="subtext text-sm sm:text-base">
          I’m based in Malabe, Sri Lanka, and open to remote work worldwide
        </p>
      </div>
      <figure className="relative flex justify-center mt-6 md:absolute md:left-[30%] md:top-[10%] md:mt-0">
        <Globe />
      </figure>
    </div>

    {/* Grid 4 */}
    <div className="grid-bg-b-stone-200 grid-4 flex flex-col items-center justify-center gap-4 text-center p-6">
      <p className="headtext text-lg sm:text-xl">
        Do you want to start a project together?
      </p>
      <CopyEmailButton />
    </div>

    {/* Grid 5 */}
    <div className="grid-default-color grid-5 relative flex flex-col min-h-[300px] md:min-h-0 p-4">
      <div className="z-10 text-center md:text-left mb-4 md:mb-0 relative">
        <p className="headText text-lg sm:text-xl mb-2">Tech Stack</p>
        <p className="subtext text-sm sm:text-base max-w-[250px] mx-auto md:max-w-[45%] md:mx-0">
          I specialize in a variety of languages, frameworks, and tools that
          allow me to build robust and scalable applications.
        </p>
      </div>
      <div className="relative w-full bottom-0 md:absolute md:bottom-auto md:inset-y-9 md:start-[50%] scale-75 md:scale-125 transform translate-y-8 md:translate-y-0">
        <Frameworks />
      </div>
    </div>
  </div>

  {/* Who Am I Section */}
  <div className="max-w-[95%] lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-16 md:mt-32 px-2 sm:px-4">
    <div className="w-full lg:w-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
        Who Am I?
      </h2>
      <p className="text-base sm:text-lg text-gray-400 mb-4 text-center md:text-left max-w-[600px] md:max-w-none mx-auto md:mx-0">
        I’m <span className="font-semibold text-blue-400">Hirusha Ranaweera</span>, 
        a 1st-year Bsc(Hons) Information Technology undergraduate at SLIIT, passionate about Full stack Web/SaaS Development,
        DevOps, Cloud, Security and CyberOps. Originally from Kandy and now living in Malabe.
      </p>
      <p className="text-base sm:text-lg text-gray-400 mb-4 text-center md:text-left">
        I’m exploring modern IT fields including Quantum computing, Blockchain, Web3.0. 
        Alongside academics, I work as a freelance developer and previously contributed
        as a web developer at Chasm Clothing and Video Editor at ZoomOut. I’m also the{" "}
        <span className="font-semibold text-blue-400">founder & CEO </span> of{" "}
        <a
          href="https://www.linkedin.com/in/radon-group1/"
          target="_blank"
          className="font-semibold text-blue-400 hover:underline"
        >
          Radon Group ↗
        </a>{" "}
        and{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61576164844589"
          target="_blank"
          className="font-semibold text-blue-400 hover:underline"
        >
          Leaving Nadir ↗
        </a>
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
