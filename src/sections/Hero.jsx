
import TextType from '../components/TextType';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden isolate bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/1744.gif')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 text-white max-w-3xl mt-[-4rem]">
        <p className="text-[clamp(1rem,1.5vw,5rem)] text-neutral-300 font-mono leading-relaxed">
          👋 Hello There,
        </p>
        <h2 className="text-[clamp(2.5rem,4vw,5rem)] font-light">
          Welcome to My Portfolio
        </h2>
        <h3 className="text-3xl font-light mb-6">
          I'm Hirusha Ranaweera
        </h3>
        <TextType className="text-3xl md:text-3xl font-semibold text-rose-500"
          text={["I do Full-Stack Dev", "I do DevSecOps", "I do Cloud Sec","I do Pen-Testing"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </section>
  );
}
