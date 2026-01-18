import { awardsData } from "../constants";

const placeStyles = {
  1: {
    label: "1st",
    bg: "bg-yellow-400",
    text: "text-yellow-900",
    ring: "ring-yellow-300",
  },
  2: {
    label: "2nd",
    bg: "bg-gray-300",
    text: "text-gray-800",
    ring: "ring-gray-200",
  },
  3: {
    label: "3rd",
    bg: "bg-amber-900",
    text: "text-amber-100",
    ring: "ring-amber-700",
  },
};

export default function Honors() {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4 mb-10">
      <h2 className="text-heading mb-20 text-center mt-3">
        Honors & Awards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {awardsData.map((award) => {
          const style = placeStyles[award.place];

          return (
            <div
              key={award.id}
              className="relative mt-10 border-gray-700 bg-[#181A2A] rounded-xl pt-10 pb-6 px-5 flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition"
            >
              <div
                className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full ${style.bg} ${style.text} font-bold text-lg ring-4 ${style.ring}`}
              >
                {style.label}
              </div>

              <p className="text-lg text-rose-500 mt-6">
                {award.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-200 mt-1">
                {award.competition}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {award.year}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
