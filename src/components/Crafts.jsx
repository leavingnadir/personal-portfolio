import { crafts } from "../constants";

const Crafts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20" id="crafts">
      <h2 className="text-heading text-center mb-20 mt-30">Crafts</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {crafts.map((craft) => (
          <div key={craft.id}>
            <img
              src={craft.image}
              alt={craft.title}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crafts;
