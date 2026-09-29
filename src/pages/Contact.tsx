import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";

import { CIcon } from "@coreui/icons-react";
import {
  cibGithub,
  cibGmail,
  cibInstagram,
  cibLetterboxd,
  cibLinkedin,
  cibMastodon,
  cibOpenstreetmap,
  cibReddit,
  cibTwitter,
  cibYoutube,
} from "@coreui/icons";

export default function Contact({ theme }: { theme: string }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = "";

    switch (cmd) {
      case "help":
        response =
          "Available commands: gh (GitHub), in (LinkedIn), x (Twitter), clear";
        break;
      case "gh":
      case "github":
        window.open("https://github.com/r17e8h", "_blank");
        response = "Opening GitHub...";
        break;
      case "in":
      case "linkedin":
        window.open("https://linkedin.com/in/r17e8h/", "_blank");
        response = "Opening LinkedIn...";
        break;
      case "x":
      case "twitter":
        window.open("https://x.com/r17e8h/", "_blank");
        response = "Opening X / Twitter...";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
        response = "Nice try. This incident will be reported.";
        break;
      case "":
        break;
      default:
        response = `bash: ${cmd}: command not found. Type 'help' for options.`;
    }

    if (cmd !== "") {
      setHistory((prev) => [...prev, `$ ${cmd}`, response].filter(Boolean));
    }
    setInput("");
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    // NEW WRAPPER: min-h-[calc(100vh-100px)] forces the container to take up the whole screen height
    <div className="animate-fade-in w-full max-w-4xl mx-auto flex flex-col min-h-0 pb-6 md:pb-8">
      {/* TERMINAL CONTAINER: flex-1 takes all available middle space, centering the terminal */}
      <div className="flex-1 flex flex-col justify-center py-4">
        {/* TERMINAL WINDOW: Increased heights dramatically (up to 600px) */}
        <div
          onClick={focusInput}
          className="w-full h-[480px] sm:h-[550px] md:h-[500px] flex flex-col rounded-2xl overflow-hidden border border-[var(--text-color)]/20 shadow-2xl backdrop-blur-xl cursor-text"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          {/* Title Bar */}
          <div className="shrink-0 flex items-center px-4 py-3 border-b border-[var(--text-color)]/10 bg-[var(--text-color)]/5">
            <div className="flex gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center text-xs md:text-sm font-bold opacity-70 tracking-widest font-heading uppercase truncate ml-2">
              r17e8h@ecoSystem ~ /contact
            </div>
          </div>

          {/* Terminal Body: Increased padding (p-6 pt-8 md:p-10 md:pt-12) to pull content away from the top edge */}
          <div
            ref={terminalBodyRef}
            className="flex-1 overflow-y-auto scrollbar-hide p-4 pt-6 md:p-8 md:pt-10 space-y-4 md:space-y-6 font-mono text-sm md:text-base pb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              {/* Dynamic Image Art */}
              <div className="hidden sm:flex shrink-0 w-32 h-32 md:w-56 md:h-56 rounded-lg overflow-hidden border border-[var(--text-color)]/20 shadow-lg bg-[var(--text-color)]/5">
                <img
                  src={
                    theme === "dark"
                      ? "./dark-avatar.jpg"
                      : "./light-avatar.jpg"
                  }
                  alt="System Avatar"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                />
              </div>

              <div className="space-y-1">
                <div className="font-bold mb-2">
                  <span className="text-[var(--accent)]">r17e8h</span>
                  <span>@</span>
                  <span>fedora</span>
                  <div className="border-b border-[var(--text-color)]/30 w-full mt-1"></div>
                </div>

                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="text-[var(--accent)] font-bold">Name</span>
                  <span>Ritesh</span>

                  <span className="text-[var(--accent)] font-bold">OS</span>
                  <span>Fedora Linux</span>

                  <span className="text-[var(--accent)] font-bold">WM</span>
                  <span>Niri (Wayland)</span>

                  <span className="text-[var(--accent)] font-bold">Shell</span>
                  <span>bash</span>

                  <span className="text-[var(--accent)] font-bold">Editor</span>
                  <span>Lazyvim</span>
                </div>

                <div className="flex gap-1 mt-4 pt-1">
                  <div className="w-4 h-4 bg-[var(--text-color)] opacity-20"></div>
                  <div className="w-4 h-4 bg-[var(--text-color)] opacity-40"></div>
                  <div className="w-4 h-4 bg-[var(--text-color)] opacity-60"></div>
                  <div className="w-4 h-4 bg-[var(--text-color)] opacity-80"></div>
                  <div className="w-4 h-4 bg-[var(--accent)]"></div>
                </div>
              </div>
            </div>

            {/* Interactive Section */}
            <div className="mt-4 space-y-3">
              <div>
                <p>There's no place like $HOME.</p>
                <p>
                  Type{" "}
                  <span className="text-[var(--accent)] font-bold">help</span>{" "}
                  to explore, or{" "}
                  <span className="text-[var(--accent)] font-bold">gh</span>,{" "}
                  <span className="text-[var(--accent)] font-bold">in</span>,{" "}
                  <span className="text-[var(--accent)] font-bold">x</span> to
                  say hello.
                </p>
              </div>

              {history.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith("$")
                      ? "text-[var(--text-color)] opacity-70"
                      : ""
                  }
                >
                  {line}
                </div>
              ))}

              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2"
              >
                <span className="text-[var(--accent)] font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-[var(--text-color)] font-mono caret-[var(--accent)]"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* DOCK CONTAINER: Forced to the bottom by the flex-1 terminal container above it */}
      <div className="w-full flex justify-center shrink-0 mt-2">
        <div
          className="w-full sm:w-fit max-w-full flex items-center justify-start sm:justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-[2rem] border border-[var(--text-color)]/20 backdrop-blur-xl shadow-2xl overflow-x-auto scrollbar-hide"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          {[
            {
              name: "Mail",
              url: "mailto:r17e8h@proton.me",
              icon: <CIcon icon={cibGmail} />,
            },
            {
              name: "GitHub",
              url: "https://github.com/r17e8h",
              icon: <CIcon icon={cibGithub} />,
            },
            {
              name: "Location / OSM",
              url: "https://www.openstreetmap.org/user/r17e8h",
              icon: <CIcon icon={cibOpenstreetmap} />,
            },
            {
              name: "YouTube",
              url: "https://youtube.com/@r17e8h",
              icon: <CIcon icon={cibYoutube} />,
            },
            {
              name: "Instagram",
              url: "https://instagram.com/_riteshhhh._",
              icon: <CIcon icon={cibInstagram} />,
            },
            {
              name: "X / Twitter",
              url: "https://x.com/r17e8h",
              icon: <CIcon icon={cibTwitter} />,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/user/Master-Vehicle6208/",
              icon: <CIcon icon={cibReddit} />,
            },
            {
              name: "Letterboxd",
              url: "https://letterboxd.com/r17e8h",
              icon: <CIcon icon={cibLetterboxd} />,
            },
            {
              name: "LinkedIn",
              url: "https://linkedin.com/in/r17e8h",
              icon: <CIcon icon={cibLinkedin} />,
            },
            {
              name: "Mastodon",
              url: "https://mastodon.social/@r17e8h",
              icon: <CIcon icon={cibMastodon} />,
            },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              title={link.name}
              className="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[var(--text-color)]/5 border border-[var(--text-color)]/10 text-[var(--text-color)] opacity-80 hover:opacity-100 hover:bg-[var(--text-color)]/10 hover:text-[var(--accent)] hover:border-[var(--accent)]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-7 sm:h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                {link.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
