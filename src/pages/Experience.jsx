import { experiences } from "../constants";

const Experience = () => {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 mx-auto max-w-[1280px]" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-heading mb-12 mt-30">Work Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#181A2A] border-gray-700 rounded-xl p-6 shadow-md transition-transform duration-600 ease-in-out hover:scale-102"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
                <span className="text-gray-400 text-sm">{exp.date}</span>
              </div>
              <p className="text-rose-500 font-medium mb-3">{exp.job}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                {exp.contents.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
