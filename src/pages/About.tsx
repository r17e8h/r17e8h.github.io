export default function About({ theme }: { theme: string }) {
  // Using the exact same opacity split from the Projects page for a 1:1 match
  const headerGlassStyle = {
    backgroundColor:
      theme === "light"
        ? "color-mix(in srgb, var(--card-bg) 85%, transparent)"
        : "color-mix(in srgb, var(--card-bg) 60%, transparent)",
  };

  const cardGlassStyle = {
    backgroundColor:
      theme === "light"
        ? "color-mix(in srgb, var(--card-bg) 85%, transparent)"
        : "color-mix(in srgb, var(--card-bg) 70%, transparent)",
  };

  return (
    <div className="animate-fade-in space-y-6 md:space-y-8 w-full max-w-5xl mx-auto pb-10 pt-8 sm:pt-12 px-2 sm:px-4">
      {/* HEADER SECTION - Matches Projects Header (85%) */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 p-5 sm:p-8 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-xl mx-2"
        style={headerGlassStyle}
      >
        <div className="space-y-3 border-l-4 border-[var(--accent)] pl-4 sm:pl-5">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-color)] drop-shadow-sm">
            About_Me
          </h1>
          <p className="font-mono text-xs sm:text-sm md:text-base opacity-100 tracking-wide max-w-2xl text-[var(--text-color)]">
            CS Undergrad. FOSS. Chess. <br className="sm:hidden" />
            <em className="text-[var(--accent)] not-italic font-bold">
              I build systems and run miles.
            </em>
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 px-2">
        {/* LEFT COLUMN - WHO AM I */}
        <div
          className="md:col-span-7 p-6 sm:p-8 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-xl relative group overflow-hidden flex flex-col justify-between"
          style={cardGlassStyle}
        >
          {/* Decorative Viewfinder Brackets */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[var(--text-color)]/30"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[var(--text-color)]/30"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[var(--text-color)]/30"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[var(--text-color)]/30"></div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3 border-b border-[var(--text-color)]/10 pb-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="font-mono text-xs tracking-widest uppercase opacity-60">
                sys.whoami
              </span>
            </div>

            <div className="space-y-4 font-mono text-sm sm:text-base leading-relaxed opacity-90">
              <p>
                I'm{" "}
                <span className="text-[var(--accent)] font-bold">Ritesh</span>,
                a developer obsessed with raw performance, low-level efficiency,
                and open-source software.
              </p>

              <p>
                My tech stack is driven by performance. I rely on{" "}
                <span className="text-[var(--accent)] font-bold">C++</span> for
                algorithms and manual memory control, and{" "}
                <span className="text-[var(--accent)] font-bold">Java</span> for
                architecting robust backend systems.
              </p>

              <p>
                I lean towards offline-first architectures—building things that
                run fast without unnecessary cloud bloat. When I'm not writing
                backend logic, I occasionally dive into frontend, ML, or
                cybersec.
              </p>

              <p className="opacity-70 pt-2 border-t border-[var(--text-color)]/10">
                Currently serving as the Community Manager for{" "}
                <span className="font-bold text-[var(--text-color)]">
                  The FOSS Club
                </span>
                .
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 flex flex-wrap gap-3 relative z-10">
            <span className="text-[10px] sm:text-xs uppercase font-mono border border-[var(--text-color)]/20 px-3 py-1.5 rounded bg-[var(--text-color)]/5">
              C++ / DSA
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-mono border border-[var(--text-color)]/20 px-3 py-1.5 rounded bg-[var(--text-color)]/5">
              Java / Backend
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-mono border border-[var(--text-color)]/20 px-3 py-1.5 rounded bg-[var(--text-color)]/5">
              Linux
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN - THE SETUP */}
        <div
          className="md:col-span-5 p-6 sm:p-8 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-xl relative group flex flex-col"
          style={cardGlassStyle}
        >
          <div className="space-y-6 flex-1">
            <div className="flex items-center gap-3 border-b border-[var(--text-color)]/10 pb-4">
              <div className="w-2 h-2 rounded-sm bg-[var(--text-color)] opacity-50 animate-pulse"></div>
              <span className="font-mono text-xs tracking-widest uppercase opacity-60">
                ~/.config
              </span>
            </div>

            <div className="space-y-4 font-mono text-sm leading-relaxed opacity-90">
              <p>
                Windows is a bloated telemetry engine. If you want to actually
                own your hardware and understand your system, switch to Linux.{" "}
                <span className="opacity-60 italic">
                  (Pro-tip: Start with Linux Mint if you are a beginner).
                </span>
              </p>

              <p>
                My current daily driver is{" "}
                <span className="font-bold text-[var(--text-color)]">
                  Fedora
                </span>
                , tiled by the{" "}
                <span className="font-bold text-[var(--text-color)]">Niri</span>{" "}
                Wayland compositor and stripped down with{" "}
                <span className="font-bold text-[var(--text-color)]">
                  DankMaterialShell (DMS)
                </span>
                .
              </p>

              <div className="pt-2 border-t border-[var(--text-color)]/10">
                <ul className="space-y-2 opacity-90 pt-2 text-xs sm:text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">❯</span> Terminal:
                    Ghostty
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">❯</span> Editor:
                    Neovim (LazyVim)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent)]">❯</span> Shell: Bash
                  </li>
                </ul>
              </div>

              <p className="text-[10px] opacity-50 pt-2">
                * Note: The dotfiles linked below currently host my rock-solid
                GNOME + Fedora workflow. Niri setup pushing soon.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--text-color)]/10">
            <a
              href="https://github.com/r17e8h/r17e8h-dotfiles"
              target="_blank"
              rel="noreferrer"
              className="w-full flex justify-between items-center px-4 py-3 border border-[var(--text-color)]/20 rounded hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all group/btn"
            >
              <span className="font-mono text-xs tracking-widest uppercase group-hover/btn:text-[var(--accent)]">
                Steal My Dotfiles
              </span>
              <span className="font-mono text-[var(--text-color)] opacity-50 group-hover/btn:opacity-100 group-hover/btn:text-[var(--accent)]">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* BOTTOM FULL WIDTH - AFK (Strava, Chess, Maps) */}
        <div
          className="md:col-span-12 p-6 sm:p-8 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-xl relative group overflow-hidden"
          style={cardGlassStyle}
        >
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3 border-b border-[var(--text-color)]/10 pb-4">
              <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
              <span className="font-mono text-xs tracking-widest uppercase opacity-60">
                status: AFK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 pt-2">
              {/* STRAVA RUNNING */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                  <span className="text-orange-500">■</span> Strava
                </h3>
                <p className="font-mono text-xs sm:text-sm opacity-70 leading-relaxed">
                  Touching grass so I don't lose my mind. Just logging miles and
                  stepping away from the screen.
                </p>
                <a
                  href="https://www.strava.com/athletes/167109767"
                  className="inline-block mt-2 font-mono text-[10px] tracking-widest uppercase opacity-50 hover:opacity-100 hover:text-orange-500 transition-colors border-b border-transparent hover:border-orange-500 pb-1"
                >
                  View Profile ↗
                </a>
              </div>

              {/* CHESS */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                  <span className="text-white drop-shadow-[0_0_2px_rgba(255,255,255,1)] dark:text-[var(--text-color)]">
                    ♞
                  </span>{" "}
                  Chess
                </h3>
                <p className="font-mono text-xs sm:text-sm opacity-70 leading-relaxed">
                  Usually blundering pieces on chess.com. Built{" "}
                  <span className="italic">EnPassant</span> so an engine can
                  play for me when I'm tired. (deployment pending)
                </p>
                <a
                  href="https://chess.com/member/r17e8h"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 font-mono text-[10px] tracking-widest uppercase opacity-50 hover:opacity-100 hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-1"
                >
                  Challenge Me ↗
                </a>
              </div>

              {/* OPENSTREETMAP */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                  <span className="text-green-500">◈</span> OpenStreetMap
                </h3>
                <p className="font-mono text-xs sm:text-sm opacity-70 leading-relaxed">
                  Because proprietary maps are garbage. Plotting local nodes and
                  keeping real-world data open-source as FOSS shouldn't just be
                  confined to a screen.{" "}
                </p>
                <a
                  href="https://www.openstreetmap.org/user/r17e8h"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 font-mono text-[10px] tracking-widest uppercase opacity-50 hover:opacity-100 hover:text-green-500 transition-colors border-b border-transparent hover:border-green-500 pb-1"
                >
                  OSM Profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
