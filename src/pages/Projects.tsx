import { useState, useRef, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { projectsData } from "../components/Projects/projectsData";

export default function Projects({ theme }: { theme: string }) {
  const [selectedTech, setSelectedTech] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the calendar to the right side (newest commits) on mobile
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  // Filter logic based on active stack
  const allTechs = [
    "All",
    "C++",
    "Python",
    "TypeScript",
    "WebAssembly",
    "Next.js",
    "React Native",
  ];

  const filteredProjects =
    selectedTech === "All"
      ? projectsData
      : projectsData.filter((p) => p.tech.includes(selectedTech));

  return (
    <div className="animate-fade-in space-y-12 w-full max-w-5xl mx-auto pb-16">
      {/* TOP SECTION: Glassmorphism Wrapper */}
      <div
        className="p-8 md:p-12 rounded-3xl border border-[var(--text-color)]/20 backdrop-blur-xl shadow-2xl space-y-12 mt-8"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        {/* HEADER */}
        <div className="space-y-3 sm:space-y-4 text-center md:text-left">
          <h1
            className="font-['Pixelify_Sans'] text-4xl sm:text-5xl md:text-7xl text-[var(--accent)] tracking-wider sm:tracking-widest uppercase font-bold drop-shadow-lg"
            style={{ textShadow: "0 0 15px var(--accent)" }}
          >
            PROJECTS
          </h1>
          <p className="font-quote text-lg sm:text-xl md:text-2xl opacity-90 tracking-wide">
            Code I wrote, bugs I fought, and systems I finally{" "}
            <em className="text-[var(--accent)] font-bold italic">shipped</em>.
          </p>
        </div>

        {/* LIVE GITHUB CALENDAR */}
        <div
          ref={scrollRef}
          className="flex justify-start overflow-x-auto pb-4 scrollbar-hide w-full"
        >
          <div className="min-w-max pr-4">
            <GitHubCalendar
              username="r17e8h"
              colorScheme={theme === "dark" ? "dark" : "light"}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              year={new Date().getFullYear()} // Forces the graph to explicitly show Jan -> Now
            />
          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center md:text-left pt-6 border-t border-[var(--text-color)]/20">
          <div>
            <div className="font-heading text-3xl md:text-4xl font-bold text-[var(--accent)]">
              12+
            </div>
            <div className="text-xs md:text-sm opacity-70 uppercase tracking-widest mt-2 font-mono">
              Projects
            </div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-4xl font-bold text-[var(--accent)]">
              3+
            </div>
            <div className="text-xs md:text-sm opacity-70 uppercase tracking-widest mt-2 font-mono">
              Years Exp
            </div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-4xl font-bold text-[var(--accent)]">
              ∞
            </div>
            <div className="text-xs md:text-sm opacity-70 uppercase tracking-widest mt-2 font-mono">
              Side Quests
            </div>
          </div>
        </div>
      </div>

      {/* FILTER PILLS */}
      <div className="flex gap-3 flex-wrap items-center justify-center md:justify-start px-2">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-mono tracking-wide transition-all border ${
              selectedTech === tech
                ? "bg-[var(--accent)] text-[var(--card-bg)] border-[var(--accent)] font-bold shadow-[0_0_15px_var(--accent)]"
                : "border-[var(--text-color)]/20 hover:border-[var(--accent)] opacity-80 hover:opacity-100 backdrop-blur-md"
            }`}
            style={
              selectedTech !== tech ? { backgroundColor: "var(--card-bg)" } : {}
            }
          >
            {tech}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-8 rounded-2xl border border-[var(--text-color)]/10 backdrop-blur-md shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/50 group"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <div className="space-y-4">
              <h3 className="font-heading text-2xl md:text-3xl font-bold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group-hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
                >
                  {project.title}
                  <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    ↗
                  </span>
                </a>
              </h3>
              <p className="text-base leading-relaxed opacity-80 font-mono">
                {project.description}
              </p>
            </div>

            <div className="flex gap-2 flex-wrap mt-8 pt-4 border-t border-[var(--text-color)]/10">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-[var(--text-color)]/5 border border-[var(--text-color)]/10 px-3 py-1 text-xs uppercase font-mono tracking-widest opacity-90 rounded-md group-hover:border-[var(--accent)]/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
