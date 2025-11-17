import { useEffect, useRef } from "react";

const certifications = [
  { img: "./assets/certifications/ec_council.png" },
  { img: "./assets/certifications/ezgif-2-003f3190c2.png" },
  { img: "./assets/certifications/ezgif-2-831f8fb746.png" },
  { img: "./assets/certifications/ezgif-2-f45f608060.png" },
  { img: "./assets/certifications/I2CS_1.png" },
  { img: "./assets/certifications/lfs162-introduction-to-devops-and-site-reliability-.png" },
  { img: "./assets/certifications/lfs169-introduction-to-gitops.png" },
  { img: "./assets/certifications/lfw111-introduction-to-node-js.png" },
  { img: "./assets/certifications/LFEL1009-Getting-Started-with-OpenTofu.png" },
  { img: "./assets/certifications/inbound-marketing-certified.png" },
  { img: "./assets/certifications/sales-management-certified.png" },
  { img: "./assets/certifications/Navigating-On-Page-Technical-SEO-A-Semrush-Deep-Dive-certified.png" },
  { img: "./assets/certifications/nyffsl.png" },
  { img: "./assets/certifications/x-ads-manager-fundamentals.png" },
];

const Certifications = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const slide = () => {
      if (!carousel) return;
      scrollAmount += 2; // speed
      if (scrollAmount >= carousel.scrollWidth / 2) scrollAmount = 0; // loop
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const interval = setInterval(slide, 50); // adjust interval for smoothness
    return () => clearInterval(interval);
  }, []);

  // Duplicate images to create an infinite scroll effect
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-heading mb-8 text-center">Certifications</h2>

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-hidden whitespace-nowrap"
        >
          {duplicatedCerts.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-20 md:w-24 flex justify-center items-center"
            >
              <img
                src={cert.img}
                className="w-16 h-16 sm:w-16 sm:h-16 object-contain rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
