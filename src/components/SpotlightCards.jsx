import { useEffect, useRef } from "react";
import { spotcards } from "../constants";

const SpotlightCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children);
    let containerSize = { w: 0, h: 0 };

    const initContainer = () => {
      containerSize.w = container.offsetWidth;
      containerSize.h = container.offsetHeight;
    };

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < containerSize.w && x > 0 && y < containerSize.h && y > 0;

      if (inside) {
        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardX = -(cardRect.left - rect.left) + x;
          const cardY = -(cardRect.top - rect.top) + y;
          card.style.setProperty("--mouse-x", `${cardX}px`);
          card.style.setProperty("--mouse-y", `${cardY}px`);
        });
      }
    };

    initContainer();
    window.addEventListener("resize", initContainer);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", initContainer);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="flex items-center justify-center px-4 py-12 mt-30 mb-20">
      <div
        ref={containerRef}
        className="grid gap-6 lg:grid-cols-3 items-start max-w-6xl w-full group"
      >
        {spotcards.map((card) => (
          <div
            key={card.id}
            className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
          >
            <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Glow background */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div>

              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex mb-4">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <img
                    src={card.image}
                    width={200}
                    height={200}
                    alt={card.title}
                    className="inline-flex"
                  />
                </div>

                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-slate-200 font-bold mb-1">
                    {card.title}
                  </h2>
                  <p className="text-sm text-slate-500">{card.description}</p>
                </div>

                {/* Button */}
                <a
                  href={card.link}
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                >
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpotlightCards;
