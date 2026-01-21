import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section className="py-10 mb-30 mt-30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-heading mb-8 text-center">Certifications</h2>

        {/* Static Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-7 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center bg-white/5 rounded-xl p-3 shadow-md"
            >
              <img
                src={cert.img}
                alt={`cert-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
