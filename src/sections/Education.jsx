import { educationData } from "../constants";

export default function Education() {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4 mb-20">
      <h2 className="text-heading mb-10 text-center mt-3">Education</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="border-gray-700 bg-[#181A2A] rounded-xl p-5 flex gap-4 hover:shadow-lg hover:scale-[1.02] transition"
          >
            {/* Left - University Logo */}
            <div className="flex-shrink-0">
              <img
                src={edu.logo}
                alt={edu.university}
                className="w-14 h-14 object-contain rounded-md bg-white p-1"
              />
            </div>

            {/* Right - Education Details */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">
                {edu.degree}
              </h3>
              <p className="text-sm  text-rose-500">{edu.university}</p>
              <p className="text-sm text-gray-400 mt-1">{edu.result}</p>
              <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
