/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { FiPlay, FiYoutube, FiExternalLink, FiFilm, FiLayers, FiArrowRight } from "react-icons/fi";

export default function VideoShowcase() {
  const videos = [
    {
      id: "vid-01",
      title: "SICK - Short Movie",
      description: "Narrative-driven video edits and conceptual documentaries blending atmospheric soundscapes",
      youtubeId: "uqmLHCTATSQ",
      duration: "10:45",
      category: "STORYTELLING",
    },
    {
      id: "vid-02",
      title: "Stellar Night'23 Introduction Video",
      description: "Narrative-driven video editing capturing atmospheric soundscapes, interviews, and cinematic pacing.",
      youtubeId: "U9dlrVa6vtY", 
      duration: "02:04",
      category: "MOTION TRAILER DESIGN",
    },
    {
      id: "vid-03",
      title: "REGION OF EXOTICA '24 Introduction Video",
      description: "Narrative-driven video editing capturing atmospheric soundscapes, interviews, and cinematic pacing.",
      youtubeId: "NUCoPz0q3ZU",
      duration: "02:29",
      category: "MOTION TRAILER DESIGN",
    },
    {
      id: "vid-04",
      title: "REGION OF EXOTICA '25 - Introduction Video",
      description: "Narrative-driven video editing capturing atmospheric soundscapes, interviews, and cinematic pacing.",
      youtubeId: "4uA1DsPqS3c",
      duration: "03:20",
      category: "MOTION TRAILER DESIGN",
    },
    {
      id: "vid-05",
      title: "The BLACK - Short Movie",
      description: "Narrative-driven video edits and conceptual documentaries blending atmospheric soundscapes",
      youtubeId: "-2_cSL94sfQ",
      duration: "06:56",
      category: "STORYTELLING",
    },
    {
      id: "vid-06",
      title: "REGION OF EXOTICA '24 - LIVE BROADCAST",
      description: "Engaging real-time broadcasts and extended sessions capturing interactive live Q&A sessions.",
      youtubeId: "Ncqftlp5UAg",
      duration: "11:54:56",
      category: "LIVE STREAM",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 py-32 text-white" id="videos">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/40 border border-violet/30 font-mono text-xs text-neutral-300 uppercase mb-4 tracking-wider">
          <FiFilm className="text-violet" />
          <span>MOTION // VIDEO EDITING</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-mono font-bold tracking-tight mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">Video Reels</span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-sans">
          A showcase of video editing, post-production, and motion graphics highlights.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {videos.map((video) => {
          // Using hqdefault.jpg to guarantee compatibility across all regular videos and live streams
          const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
          
          // Smart routing for live streams vs standard videos
          const watchUrl = video.category === "LIVE BROADCAST" 
            ? `https://www.youtube.com/live/${video.youtubeId}` 
            : `https://www.youtube.com/watch?v=${video.youtubeId}`;

          return (
            <div
              key={video.id}
              className="group rounded-3xl bg-[#090b14] border border-white/10 overflow-hidden flex flex-col justify-between shadow-xl hover:border-violet/50 transition-all duration-300"
            >
              <div>
                {/* YouTube Thumbnail Preview Box */}
                <div className="relative w-full aspect-video overflow-hidden bg-midnight">
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback safeguard if thumbnail source fails
                      e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/default.jpg`;
                    }}
                  />
                  
                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-midnight/40 group-hover:bg-midnight/20 transition-colors flex items-center justify-center">
                    <a
                      href={watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-violet/90 border border-white/20 flex items-center justify-center text-white text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                      aria-label="Play Video"
                    >
                      <FiPlay className="text-neon fill-neon ml-0.5 size-5" />
                    </a>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-midnight/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-neutral-200">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info Content */}
                <div className="p-6">
                  <span className="font-mono text-[10px] uppercase text-violet tracking-widest block mb-2">
                    // {video.category}
                  </span>
                  <h3 className="text-xl font-mono font-bold text-white mb-2 tracking-tight">
                    {video.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-neon hover:text-white transition-colors pt-4 border-t border-white/5 w-full justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <FiYoutube className="size-4 text-rose-500" /> Watch on YouTube
                  </span>
                  <FiExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Unique Full Collection Behance Showcase Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-violet/20 via-[#090b14] to-indigo/20 border border-violet/40 p-8 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/20 border border-violet/40 font-mono text-xs text-violet uppercase tracking-widest">
              <FiLayers className="size-3.5" />
              <span>ARCHIVE // FULL COLLECTION</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-mono font-bold tracking-tight text-white">
              Explore the Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">Video Recap Collection</span>
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base font-sans max-w-2xl">
              Dive deeper into the full suite of video designs, detailed case studies, storyboard layouts, and frame breakdowns hosted on Behance.
            </p>
          </div>

          <a
            href="https://www.behance.net/gallery/222513233/2024-Recap-Video-Designs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-violet hover:bg-violet/80 text-white font-mono text-sm tracking-wider transition-all duration-300 shadow-lg shadow-violet/25 group whitespace-nowrap cursor-pointer"
          >
            <span>VIEW ON BEHANCE</span>
            <FiArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
}