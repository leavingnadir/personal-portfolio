
const publications = [
  {
    id: 1,
    title: "Utilizing Blockchain & Smart Contracts to Simplify and Secure Daily Life",
    date: "Jul 23, 2025",
    platform: "Zenodo",
    description:
      "Explored the practical application of blockchain technology in everyday scenarios by designing and developing a working prototype focused on automating routine tasks with smart contract logic and data transparency.",
    url: "https://zenodo.org/records/16294106",
  },
  {
    id: 2,
    title: "DeFi Protocols Interplay Analyzation and Utilization",
    date: "Jul 22, 2025",
    platform: "Zenodo",
    description:
      "Conducted an in-depth analysis of how various decentralized finance protocols interact, identifying opportunities for cross-platform integration and yield optimization within the Web3 ecosystem.",
    url: "https://zenodo.org/records/16294492",
  },
  // Add more publications here
];

const Publications = () => {
  return (
    <section className="w-full py-16 px-4 mb-20 text-white" id="publications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-heading mb-10">Publications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 md:p-5 rounded-lg border-gray-700 bg-[#181A2A] shadow-md max-w-lg mx-auto transition-transform duration-600 ease-in-out hover:scale-102"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-3">
                {pub.platform} · {pub.date}
              </p>
              <p className="text-gray-300 text-sm">{pub.description}</p>
              <span className="inline-block mt-3  text-rose-500 font-medium text-sm hover:underline">
                Show publication →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
