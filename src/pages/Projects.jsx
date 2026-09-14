/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { myProjects } from "../constants";
import { motion } from "motion/react";
import Crafts from "../components/Crafts";

/* -------------------- Project Details Modal -------------------- */
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto backdrop-blur-md bg-black/70">
      <motion.div
        className="relative max-w-2xl w-full mx-auto border shadow-2xl rounded-2xl bg-midnight border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
      >
        {/* Ambient background glow inside modal */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={closeModal}
          className="absolute z-20 p-2.5 rounded-xl top-4 right-4 bg-indigo/80 border border-white/10 hover:border-violet/50 text-white transition-colors cursor-pointer"
        >
          <img src="assets/close.svg" className="w-5 h-5 filter brightness-200" />
        </button>

        <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-white/5">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8 relative z-10">
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-3 tracking-wide">
            {title}
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-300 leading-relaxed">
            {description}
          </p>

          <div className="space-y-2 mb-6">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-xs sm:text-sm font-normal text-neutral-400 leading-relaxed">
                {subDesc}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div key={tag.id} className="p-2 rounded-lg bg-indigo/50 border border-white/5 flex items-center justify-center">
                  <img src={tag.path} alt={tag.name} className="w-5 h-5 object-contain" title={tag.name} />
                </div>
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet/20 border border-violet/50 text-neon hover:bg-violet/30 font-mono text-xs tracking-wider uppercase transition-all"
            >
              <span>View Source</span> <img src="assets/arrow-up.svg" className="size-3.5 filter brightness-200" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------- Single Project Card (Bento Style) -------------------- */
const ProjectCard = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="group relative rounded-2xl bg-midnight border border-white/5 hover:border-violet/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden p-6 sm:p-8">
        
        {/* Subtle background glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div>
          {/* Thumbnail preview inside the card header */}
          <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-white/5 bg-indigo/30">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500" 
            />
          </div>

          <h3 className="text-lg sm:text-xl font-mono font-medium text-white mb-3 group-hover:text-neon transition-colors">
            {title}
          </h3>
          
          <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 mb-6 leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag.id} className="px-2.5 py-1 rounded bg-indigo/60 border border-white/5 font-mono text-[11px] text-neon">
                {tag.name}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <button
              onClick={() => setIsHidden(true)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-violet hover:text-neon transition-colors cursor-pointer"
            >
              <span>ACCESS_LOGS</span>
              <img src="assets/arrow-right.svg" className="w-4 filter brightness-200" />
            </button>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-indigo/40 hover:bg-violet/20 border border-white/5 transition-colors"
              title="External Link"
            >
              <img src="assets/arrow-up.svg" className="w-3.5 h-3.5 filter brightness-200" />
            </a>
          </div>
        </div>
      </div>

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

/* -------------------- Main Projects Section -------------------- */
const Projects = () => {
  return (
    <section
      className="relative c-space max-w-[1280px] mx-auto px-4 pt-36 pb-24 mb-20"
      id="projects"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
          // FEATURED DEPLOYMENTS & SYSTEMS
        </span>
        <h2 className="text-heading text-white">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {myProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <Crafts />
    </section>
  );
};

export default Projects;