import { Link } from "react-router-dom";
import { projectsData } from "../components/Projects/projectsData";
import { CIcon } from "@coreui/icons-react";
import { cibGithub, cibGmail, cibLinkedin, cibTwitter } from "@coreui/icons";

export default function Home({ currentLore }: { currentLore: any }) {
  return (
    <div className="flex flex-col space-y-16 md:space-y-24 animate-fade-in">
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-[70vh] flex flex-col justify-center items-center text-center scroll-mt-24"
      >
        <div
          className="p-8 md:p-14 border border-[var(--text-color)]/10 rounded-2xl backdrop-blur-md shadow-2xl w-full max-w-3xl mx-auto"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide mb-4 uppercase font-bold">
            Hi, I'm Ritesh
          </h1>
          <p className="font-heading text-sm sm:text-base md:text-lg opacity-90 max-w-xl mx-auto leading-relaxed font-medium">
            ~ cs undergrad, into backend dev, FOSS and sometimes dives into ml
            and cybersec :)
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-24 p-6 md:p-10 border border-[var(--text-color)]/10 rounded-2xl backdrop-blur-md shadow-lg"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl mb-6 text-[var(--accent)] uppercase font-bold tracking-wide">
          ABOUT ME
        </h2>
        <blockquote className="font-quote border-l-4 border-[var(--accent)] pl-5 italic mb-6 text-lg md:text-xl opacity-90 leading-relaxed">
          {currentLore.quote1}
        </blockquote>
        <p className="text-base md:text-lg leading-relaxed mb-6 opacity-90">
          {currentLore.description}
        </p>
        <Link
          to="/about"
          className="text-[var(--accent)] hover:underline uppercase text-sm md:text-base font-bold"
        >
          Read Full Intel →
        </Link>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="scroll-mt-24 p-6 md:p-10 border border-[var(--text-color)]/10 rounded-2xl backdrop-blur-md shadow-lg"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl mb-8 text-[var(--accent)] uppercase font-bold tracking-wide">
          Projects
        </h2>
        <div className="space-y-10">
          {projectsData.slice(0, 2).map((project) => (
            <div key={project.id} className="border-l-4 border-current pl-5">
              {/* Clickable Title */}
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4 transition-colors"
                >
                  {project.title} ↗
                </a>
              </h3>

              <p className="text-base md:text-lg opacity-90 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-current px-2 py-1 text-xs md:text-sm opacity-80 uppercase tracking-wide font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/projects"
            className="text-[var(--accent)] hover:underline uppercase text-sm md:text-base font-bold"
          >
            View Full Archive →
          </Link>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section
        id="blog"
        className="scroll-mt-24 p-6 md:p-10 border-2 border-dashed border-current opacity-70 rounded-2xl flex flex-col items-center justify-center min-h-[200px] backdrop-blur-md"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl mb-3 uppercase text-[var(--accent)] font-bold tracking-wide">
          Logs
        </h2>
        <p className="text-base md:text-lg animate-pulse mb-4 opacity-90">
          Will be updating soon :)
        </p>
        <Link
          to="/logs"
          className="text-[var(--accent)] hover:underline uppercase text-sm md:text-base font-bold opacity-100"
        >
          Open Logs Terminal →
        </Link>
      </section>

      {/* UPGRADED CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 p-6 md:p-10 border border-[var(--text-color)]/10 rounded-2xl backdrop-blur-md shadow-lg"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl mb-6 text-[var(--accent)] uppercase font-bold tracking-wide">
          Contacts
        </h2>

        {/* Responsive Grid for Icons */}
        {/* Responsive Grid for Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              name: "GitHub",
              icon: cibGithub,
              url: "https://github.com/r17e8h",
            },
            {
              name: "LinkedIn",
              icon: cibLinkedin,
              url: "https://linkedin.com/in/r17e8h/",
            },
            {
              name: "X / Twitter",
              icon: cibTwitter,
              url: "https://x.com/r17e8h/",
            },
            { name: "Email", icon: cibGmail, url: "mailto:r17e8h@proton.me" },
          ].map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--text-color)]/20 bg-transparent hover:border-[var(--accent)] hover:bg-[var(--text-color)]/5 transition-all duration-300 aspect-square"
            >
              {/* Added text and fill classes to make icons visible in dark/light mode */}
              <CIcon
                icon={contact.icon}
                className="w-8 h-8 sm:w-10 sm:h-10 mb-3 text-[var(--text-color)] fill-current opacity-70 group-hover:opacity-100 group-hover:text-[var(--accent)] group-hover:-translate-y-1 transition-all duration-300"
              />
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider opacity-80 group-hover:opacity-100">
                {contact.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/contact"
            className="text-[var(--accent)] hover:underline uppercase text-sm md:text-base font-bold"
          >
            More Contacts →
          </Link>
        </div>
      </section>
    </div>
  );
}
