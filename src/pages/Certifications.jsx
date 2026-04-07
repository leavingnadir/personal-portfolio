import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section className="py-10 mb-30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-heading text-center mt-30 mb-20">
          Certifications
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-7 place-items-stretch">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center bg-white/5 rounded-xl p-3 shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="w-full h-full object-contain"
                />
              </div>
          
              <div className="mt-2 min-h-[2.5rem] flex items-start justify-center">
                <p className="text-[10px] sm:text-xs text-gray-300 leading-tight max-w-[90px]">
                  {cert.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;