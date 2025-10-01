import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import TiltedCard from '../components/TiltedCard';
  
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing grid content-center mx-auto max-w-[1280px]" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, Im Hirusha Ranaweera</p>
            <p className="subtext">
              Over the last 4 years, I developed my design, editing, frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="REST APIs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="OOP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Full Stack"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="CI/CD"
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
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Im based in Malabe Sri Lanka, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-32">
        <div className="w-3xl">
          <h2 className="text-4xl font-bold mb-4">Who Am I?</h2>
          <p className="text-lg text-gray-400 mb-4">
            I’m <span className="font-semibold text-purple">Hirusha Ranaweera</span>, 
            a 1st-year Bsc(Hons) Information Technology undergraduate at SLIIT, passionate about Full stack Web/SaSS Developments,
            DevOps, Cloud, Security and CyberOps. Originally from Kandy and now living in Malabe.
          </p>
          <p className="text-lg text-gray-400 mb-4">
            I’m exploring modern IT fields including Quantum computing, Blockchain, Web3.0. 
            Alongside academics, I work as a freelance developer and previously contributed
            as a web developer at Chasm Clothing and Video Editor at ZoomOut. I’m also the <span className="font-semibold text-purple">founder & CEO </span> of 
            <a href="https://www.linkedin.com/in/radon-group1/" target="_blank" className="font-semibold text-purple hover:underline"> Radon Group↗</a> and
            <a href="https://www.facebook.com/profile.php?id=61576164844589" target="_blank" className="font-semibold text-purple hover:underline"> Leaving Nadir↗</a>
            , initiatives focused on innovation, creativity, and delivering impactful digital projects.
          </p>
          <p className="text-lg text-gray-400">
            I have published two papers on Web3, Blockchain, and DApp development, which allowed
            me to contribute to the growing discourse on decentralized technologies. With a drive for continuous learning and innovation, my mission
            is to explore, create, and bring forward new ideas that shape the future of technology in the country.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <TiltedCard
            imageSrc="/assets/me.png"
            altText="Hirusha Ranaweera"
            captionText="Hirusha Ranaweera"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
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
