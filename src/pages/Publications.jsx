import { publications } from "../constants";

const Publications = () => {
  return (
    <section className="w-full py-16 px-4 mb-20 mt-30 text-white" id="publications">
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
