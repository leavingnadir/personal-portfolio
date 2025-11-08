const certifications = [
  {
    img: "./assets/certifications/ec_council.png",
  },
  {
    img: "./assets/certifications/ezgif-2-003f3190c2.png",
  },
  {
    img: "./assets/certifications/ezgif-2-831f8fb746.png",
  },
  {
    img: "./assets/certifications/ezgif-2-f45f608060.png",
  },
  {
    img: "./assets/certifications/inbound-marketing-certified.png",
  },
  {
    img: "./assets/certifications/sales-management-certified.png",
  },
  {
    img: "./assets/certifications/microsoftlearning.png",
  },
  {
    img: "./assets/certifications/Navigating-On-Page-Technical-SEO-A-Semrush-Deep-Dive-certified.png",
  },
  {
    img: "./assets/certifications/nyffsl.png",
  },
  {
    img: "./assets/certifications/x-ads-manager-fundamentals.png",
  },
];

const Certifications = () => {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-heading mb-8 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transform transition-all duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={cert.img}
                className="w-16 h-16 sm:w-16 sm:h-16 object-contain mb-2 rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
