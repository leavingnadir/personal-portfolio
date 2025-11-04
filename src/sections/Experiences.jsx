const experiences = [
  {
    id: 1,
    period: "2020 – Present",
    company: "Upwork & Behance",
    role: "Freelance Web & Graphic Designer",
    responsibilities: [
      "Built 8+ full-scale websites, managing everything from wireframes to deployment to meet diverse client requirements.",
      "Delivered 200+ professional design materials, including posters, graphics, and digital assets. Specialized in graphic design, motion graphics, web design, and web development.",
      "Adapted quickly to client needs while maintaining consistency, creativity, and high-quality standards across projects.",
    ],
  },
  {
    id: 2,
    period: "2023 – 2024",
    company: "ZoomOut Studio",
    role: "Video Editor & Visual Designer",
    responsibilities: [
      "Edited 2 original short films from concept to final cut, including video editing, sound design, and color/light balance.",
      "Designed film posters and promotional visuals for marketing and distribution.",
      "Collaborated with the production team to deliver polished, cinematic outputs.",
    ],
  },
  {
    id: 3,
    period: "2024 – 2025",
    company: "Chasm Clothing",
    role: "Graphic Designer",
    responsibilities: [
      "Produced promotional videos and original graphics for social media campaigns and seasonal collections.",
      "Designed digital ads, posters, and brand identity assets to support marketing strategies.",
    ],
  },
  {
    id: 4,
    period: "2025 – Present",
    company: "Chasm Clothing",
    role: "Web Developer",
    responsibilities: [
      "Designed and developed the official Chasm Clothing website, ensuring a modern, responsive, and user-friendly interface.",
      "Focused on seamless navigation, performance optimization, and enhanced customer engagement.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="w-full py-16 px-4 text-white" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-heading mb-12">Work Experience</h2>

        {/* Responsive Grid: 1 column on small, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#181A2A] border border-gray-700 rounded-xl p-6 shadow-md transition-transform duration-600 ease-in-out hover:scale-102"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl md:text-2xl font-semibold">{exp.role}</h3>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                {exp.responsibilities.map((task, index) => (
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

export default WorkExperience;