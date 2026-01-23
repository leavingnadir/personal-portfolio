import { personas } from "../constants";

const Personas = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 mb-30" id="personas">
      <h2 className="text-heading text-center mb-20">Versions of Me</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {personas.map((persona) => (
          <div
            key={persona.id}
            className="relative w-64 h-96 overflow-hidden group shadow-xl transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={persona.image}
              alt={persona.name}
              className="w-full h-full object-cover"
            />

            {/* Name label */}
            <div className="absolute bottom-4 left-4 bg-rose-600 px-3 py-1 text-white font-semibold tracking-wide">
              {persona.name.toUpperCase()}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {persona.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {persona.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {Object.entries(persona.socials).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm border border-white px-3 py-1 hover:bg-white hover:text-black transition"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Personas;
