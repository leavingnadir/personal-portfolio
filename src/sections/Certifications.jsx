const certifications = [
  { img: "./assets/certifications/ec_council.png" },
  { img: "./assets/certifications/ezgif-2-003f3190c2.png" },
  { img: "./assets/certifications/ezgif-2-831f8fb746.png" },
  { img: "./assets/certifications/ezgif-2-f45f608060.png" },
  { img: "./assets/certifications/I2CS_1.png" },
  { img: "./assets/certifications/networking-basics.png" },
  { img: "./assets/certifications/ethical-hacker.png" },
  { img: "./assets/certifications/network-defense.png" },
  { img: "./assets/certifications/endpoint-security.png" },
  { img: "./assets/certifications/ccep.png" },
  { img: "./assets/certifications/CPPS-badge.png" },
  { img: "./assets/certifications/crpo-badge.png" },
  { img: "./assets/certifications/CRTOM.png" },
  { img: "./assets/certifications/skf100-understanding-the-owasp-top-10-security-thre.png" },
  { img: "./assets/certifications/lfc108-cybersecurity-essentials.png" },
  { img: "./assets/certifications/lfs162-introduction-to-devops-and-site-reliability-.png" },
  { img: "./assets/certifications/lfs169-introduction-to-gitops.png" },
  { img: "./assets/certifications/lfw111-introduction-to-node-js.png" },
  { img: "./assets/certifications/LFEL1009-Getting-Started-with-OpenTofu.png" },
  { img: "./assets/certifications/lfs167-introduction-to-jenkins.png" },
  { img: "./assets/certifications/inbound-marketing-certified.png" },
  { img: "./assets/certifications/sales-management-certified.png" },
  { img: "./assets/certifications/Navigating-On-Page-Technical-SEO-A-Semrush-Deep-Dive-certified.png" },
  { img: "./assets/certifications/nyffsl.png" },
  { img: "./assets/certifications/x-ads-manager-fundamentals.png" },
];

const Certifications = () => {
  return (
    <section className="py-10 mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-heading mb-8 text-center">Certifications</h2>

        {/* Static Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-7 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="w-24 h-24 sm:w-28 sm:h-28 flex justify-center items-center bg-white/5 rounded-xl p-3 shadow-md"
            >
              <img
                src={cert.img}
                alt={`cert-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
