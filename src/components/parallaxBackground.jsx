
const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/background.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
