import { useState, useRef, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { projectsData } from "../components/Projects/projectsData";

export default function Projects({ theme }: { theme: string }) {
  const [selectedTech, setSelectedTech] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  const allTechs = [
    "All",
    "C++",
    "Python",
    "TypeScript",
    "WebAssembly",
    "Next.js",
    "React Native",
    "Shell",
  ];

  const filteredProjects =
    selectedTech === "All"
      ? projectsData
      : projectsData.filter((p) => p.tech.includes(selectedTech));

  // Dynamic Glass Styles based on Theme
  const headerGlassStyle = {
    backgroundColor:
      theme === "light"
        ? "color-mix(in srgb, var(--card-bg) 85%, transparent)"
        : "color-mix(in srgb, var(--card-bg) 20%, transparent)",
  };

  const cardGlassStyle = {
    backgroundColor:
      theme === "light"
        ? "color-mix(in srgb, var(--card-bg) 70%, transparent)"
        : "color-mix(in srgb, var(--card-bg) 2%, transparent)",
  };

  return (
    <div className="animate-fade-in space-y-8 md:space-y-10 w-full max-w-5xl mx-auto pb-20 pt-8 sm:pt-12 px-2 sm:px-4">
      {/* HEADER SECTION */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 p-5 sm:p-8 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-xl mx-2"
        style={headerGlassStyle}
      >
        <div className="space-y-3 border-l-4 border-[var(--accent)] pl-4 sm:pl-5">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-color)] drop-shadow-sm">
            Projects
          </h1>
          <p className="font-mono text-xs sm:text-sm md:text-base opacity-100 tracking-wide max-w-xl text-[var(--text-color)]">
            Code I wrote, bugs I fought, and systems I finally{" "}
            <em className="text-[var(--accent)] not-italic font-bold">
              shipped
            </em>
            .
          </p>
        </div>

        {/* VIEW ALL PROJECTS*/}
        <div className="self-end md:self-auto md:pb-1">
          <a
            href="https://github.com/r17e8h?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-1.5 cursor-pointer"
          >
            <div className="text-[10px] sm:text-xs font-mono opacity-70 group-hover:opacity-100 transition-opacity uppercase tracking-widest leading-relaxed text-right text-[var(--text-color)]">
              VIEW ALL
              <br />
              PROJECTS
            </div>
            <span className="text-[10px] font-mono opacity-70 group-hover:opacity-100 transition-opacity mt-0.5 text-[var(--text-color)]">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* LIVE GITHUB CALENDAR */}
      <div className="px-2">
        <div
          className="p-4 sm:p-6 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-lg"
          style={headerGlassStyle}
        >
          <div className="text-[10px] sm:text-xs font-mono tracking-widest uppercase opacity-70 mb-4 sm:mb-6 text-[var(--text-color)]">
            Live Commits // r17e8h
          </div>
          <div
            ref={scrollRef}
            className="flex justify-start overflow-x-auto pb-2 scrollbar-hide w-full"
          >
            <div className="min-w-max">
              <GitHubCalendar
                username="r17e8h"
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={12}
                blockMargin={4}
                fontSize={10}
                year={new Date().getFullYear()}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="px-2">
        <div className="flex gap-2 sm:gap-3 flex-wrap items-center">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wider transition-all border backdrop-blur-md ${
                selectedTech === tech
                  ? "bg-[var(--accent)] text-[var(--card-bg)] border-[var(--accent)] font-bold shadow-[0_0_10px_var(--accent)]"
                  : "border-[var(--text-color)]/20 hover:border-[var(--accent)]/60 text-[var(--text-color)] opacity-70 hover:opacity-100"
              }`}
              style={
                selectedTech !== tech
                  ? {
                      backgroundColor:
                        "color-mix(in srgb, var(--card-bg) 40%, transparent)",
                    }
                  : {}
              }
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      {/* PROJECT GRID */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 px-2">
        {filteredProjects.map((project: any) => (
          <div
            key={project.id}
            className="p-3 sm:p-5 flex flex-col gap-3 sm:gap-5 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--text-color)]/40 group"
            style={cardGlassStyle}
          >
            {/* IMAGE WITH VIEWFINDER OVERLAY */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--text-color)]/20 bg-black/10 dark:bg-black/40">
              <img
                src={
                  theme === "dark"
                    ? project.imageDark || "/dark-avatar.png"
                    : project.imageLight || "/light-avatar.png"
                }
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 opacity-100 grayscale-0 md:opacity-70 md:grayscale group-hover:grayscale-0 group-hover:opacity-100"
              />

              {/* Camera UI */}
              <div className="hidden sm:flex absolute top-3 left-3 items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
                <span className="text-[9px] font-mono text-white tracking-widest drop-shadow-md">
                  REC
                </span>
              </div>

              {/* Viewfinder Brackets */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-white/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-white/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-white/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-white/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* TITLE & YEAR */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline px-1 mt-1 gap-1">
              <h3 className="font-heading text-sm sm:text-lg md:text-xl font-bold tracking-wide truncate w-full sm:w-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)] transition-colors text-[var(--text-color)] cursor-pointer"
                >
                  {project.title}
                </a>
              </h3>
              <span className="font-mono text-[9px] sm:text-xs opacity-60 tracking-widest text-[var(--text-color)]">
                {project.year || "202X"}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[10px] sm:text-sm opacity-80 leading-relaxed font-mono px-1 text-[var(--text-color)] line-clamp-3 sm:line-clamp-none">
              {project.description}
            </p>

            {/* TECH STACK & GITHUB */}
            <div className="mt-auto pt-3 sm:pt-4 flex flex-col xl:flex-row justify-between xl:items-end gap-3 sm:gap-4 px-1">
              <div className="flex flex-wrap gap-x-2 gap-y-1 flex-1">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-[8px] sm:text-[11px] uppercase font-mono opacity-70 group-hover:opacity-100 transition-opacity text-[var(--text-color)] border sm:border-none border-[var(--text-color)]/20 px-1.5 py-0.5 sm:p-0 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 opacity-70 shrink-0">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                    className="hover:text-[var(--accent)] hover:opacity-100 transition-colors text-[var(--text-color)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="flex items-center gap-1 hover:text-[var(--accent)] hover:opacity-100 transition-colors text-[var(--text-color)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-[9px] sm:text-[11px] font-mono font-bold mt-0.5">
                      {project.stars || 0}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
