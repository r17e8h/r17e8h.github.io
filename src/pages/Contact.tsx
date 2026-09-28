import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";

export default function Contact({ theme }: { theme: string }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  // NEW: Target the scrollable container directly
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ONLY the terminal body
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  // Guts / Dark Mode ASCII (Brand of Sacrifice)
  const berserkAscii = [
    "       \\         /      ",
    "        \\       /       ",
    "         \\     /        ",
    "          \\   /         ",
    "         --| |--        ",
    "        /  | |  \\       ",
    "       / / | | \\ \\      ",
    "      / /  | |  \\ \\     ",
    "     | /   | |   \\ |    ",
    "     |/    | |    \\|    ",
    "           | |          ",
    "          /| |\\         ",
    "         / | | \\        ",
    "           | |          ",
  ].join("\n");

  // Ippo / Light Mode ASCII (Boxing Glove)
  const ippoAscii = [
    "       _.+----..._      ",
    "     .'           '.    ",
    "    /   _.-+--.     \\   ",
    "   |   /       \\     |  ",
    "   |   |       |     |  ",
    "    \\  \\       /    /   ",
    "     '. '-...-'   .'    ",
    "       '._      .'      ",
    "     _..--'    '--.._   ",
    "    |                |  ",
    "    |  .-.      .-.  |  ",
    "    |  | |      | |  |  ",
    "    |  '-'      '-'  |  ",
    "    '----------------'  ",
  ].join("\n");

  const currentAscii = theme === "dark" ? berserkAscii : ippoAscii;

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
    <div className="animate-fade-in space-y-6 w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* TERMINAL WINDOW */}
      <div
        onClick={focusInput}
        className="w-full h-[450px] sm:h-[500px] md:h-[550px] flex flex-col rounded-xl overflow-hidden border border-[var(--text-color)]/20 shadow-2xl backdrop-blur-xl cursor-text"
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

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef} // APPLIED HERE to control scrolling directly
          className="flex-1 overflow-y-auto scrollbar-hide p-6 md:p-8 space-y-6 font-mono text-sm md:text-base"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <pre className="text-[var(--accent)] font-bold leading-tight hidden sm:block">
              {currentAscii}
            </pre>

            <div className="space-y-1 pt-0 sm:pt-2">
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
                <span className="text-[var(--accent)] font-bold">help</span> to
                explore, or{" "}
                <span className="text-[var(--accent)] font-bold">gh</span>,{" "}
                <span className="text-[var(--accent)] font-bold">in</span>,{" "}
                <span className="text-[var(--accent)] font-bold">x</span> to say
                hello.
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

            <form onSubmit={handleCommand} className="flex items-center gap-2">
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
            {/* The hidden div is removed, as it is no longer needed with container scrolling */}
          </div>
        </div>
      </div>

      {/* DOCK / QUICK LINKS (SVG Icons) */}
      <div
        className="flex justify-center gap-8 sm:gap-12 px-8 py-3 sm:py-4 rounded-full border border-[var(--text-color)]/20 backdrop-blur-md shadow-lg"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <a
          href="https://github.com/r17e8h"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-[var(--text-color)] hover:text-[var(--accent)] transition-colors hover:scale-110 transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>

        <a
          href="https://linkedin.com/in/r17e8h/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-[var(--text-color)] hover:text-[var(--accent)] transition-colors hover:scale-110 transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <a
          href="https://x.com/r17e8h/"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="text-[var(--text-color)] hover:text-[var(--accent)] transition-colors hover:scale-110 transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
