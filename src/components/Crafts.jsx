/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { FiLayers, FiImage, FiX, FiArrowRight } from "react-icons/fi";
import VideoShowcase from "../components/VideoShowcase";

export default function Crafts() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: "proj-01",
      title: "Chasm Clothing Branding Posters",
      description: "Experimental apparel brand poster series featuring bold typography and deep atmospheric lighting.",
      images: [
        "/assets/crafts/05.jpg",
        "/assets/crafts/06.jpg",
        "/assets/crafts/04.jpg",
        "/assets/crafts/11.jpg",
      ],
    },
    {
      id: "proj-02",
      title: "Kingswood College Society Posters",
      description: "Dynamic event announcements, and creative social media collateral designed for various school societies.",
      images: [
        "/assets/crafts/01.jpg",
        "/assets/crafts/02.jpg",
        "/assets/crafts/03.jpg",
        "/assets/crafts/09.jpg",
      ],
    },
    {
      id: "proj-03",
      title: "Inter-Club & ExCo Promotional Media",
      description: "High-impact Executive Committee reveal posters, and campaign artwork for school clubs and external organizational bodies.",
      images: [
        "/assets/crafts/07.png",
        "/assets/crafts/15.jpg",
        "/assets/crafts/14.jpg",
        "/assets/crafts/17.jpg",
      ],
    },
    {
      id: "proj-04",
      title: "Exhibition & Editorial Visuals",
      description: "Curated series of layout designs, signing-off certificates, and specialized event series artwork.",
      images: [
        "/assets/crafts/08.png",
        "/assets/crafts/10.png",
        "/assets/crafts/13.jpg",
        "/assets/crafts/16.jpg",
      ],
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-12 text-white" id="crafts">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/40 border border-violet/30 font-mono text-xs text-neutral-300 uppercase mb-4 tracking-wider">
            <FiLayers className="text-violet" />
            <span>PROJECT ALBUMS // GALLERY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-mono font-bold tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">Crafts &amp; Posters</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans">
            A collection of design albums showcasing brand identity, event art, and digital posters.
          </p>
        </div>

        {/* Project Albums Stack */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#090b14] border border-white/10 p-8 sm:p-11 lg:p-12 relative overflow-hidden shadow-2xl backdrop-blur-xl"
            >
              {/* Ambient Background Glow */}
              <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-violet/5 rounded-full blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Project Info */}
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-violet tracking-widest block mb-2.5">
                    // ALBUM 0{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-3.5 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-neon">
                    <FiImage className="size-4" />
                    <span>{project.images.length} Curated Assets</span>
                  </div>
                </div>

                {/* Poster Gallery Grid (4 Images per Project Album) */}
                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                  {project.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className="group relative rounded-2xl bg-midnight border border-white/10 overflow-hidden aspect-[4/5] cursor-pointer shadow-lg hover:border-violet/50 transition-all duration-300"
                    >
                      <img
                        src={imgSrc}
                        alt={`${project.title} poster ${imgIdx + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 font-mono text-[10px] text-neutral-300">
                        <span>VIEW_FULL</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Archive / Full Collection Banner (Generous Inner Padding) */}
        <div className="mt-10 relative rounded-3xl bg-gradient-to-r from-violet/20 via-[#090b14] to-indigo/20 border border-violet/40 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="hidden md:block absolute top-0 right-0 w-80 h-80 bg-violet/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 relative z-10">
            <div className="space-y-3.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/20 border border-violet/40 font-mono text-xs text-violet uppercase tracking-widest">
                <FiLayers className="size-3.5" />
                <span>ARCHIVE // FULL COLLECTION</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-mono font-bold tracking-tight text-white">
                Explore the Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">Graphics Recap Collection</span>
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
                Dive deeper into the full suite of graphics designs, typos, storyboard layouts hosted on Behance.
              </p>
            </div>

            <a
              href="https://www.behance.net/gallery/219982491/2024-Recap-Graphic-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-violet hover:bg-violet/80 text-white font-mono text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-lg shadow-violet/25 group whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>VIEW ON BEHANCE</span>
              <FiArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Compact Lightbox Modal for Full Image Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-midnight/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-3"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 rounded-xl bg-midnight/90 border border-white/15 flex items-center justify-center text-white hover:border-violet/50 transition-colors cursor-pointer"
            >
              <FiX className="size-5 text-neon" />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[92vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <img
                src={selectedImage}
                alt="Expanded Preview"
                className="max-w-[95vw] max-h-[92vh] object-contain block mx-auto"
              />
            </div>
          </div>
        )}

      </section>

      <VideoShowcase />
    </>
  );
}