export default function Logs({ theme }: { theme: string }) {
  const boxStyle = {
    backgroundColor:
      theme === "light"
        ? "var(--card-bg)"
        : "color-mix(in srgb, var(--card-bg) 20%, transparent)",
  };

  return (
    <div className="animate-fade-in w-full max-w-5xl mx-auto pb-10 pt-8 sm:pt-12 px-2 sm:px-4 flex items-center justify-center min-h-[75vh]">
      <div
        className="w-full max-w-2xl p-10 sm:p-14 rounded-2xl border border-[var(--text-color)]/15 backdrop-blur-xl shadow-xl flex flex-col items-center text-center relative overflow-hidden"
        style={boxStyle}
      >
        {/* Decorative Viewfinder Brackets */}
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[var(--text-color)]/30"></div>
        <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-[var(--text-color)]/30"></div>
        <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-[var(--text-color)]/30"></div>
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[var(--text-color)]/30"></div>

        {/* Minimal Status Indicator */}
        <div className="w-2 h-2 rounded-full bg-[var(--accent)] mb-8 animate-pulse shadow-[0_0_8px_var(--accent)]"></div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase text-[var(--text-color)] mb-4">
          Logs_
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-color)] to-[var(--accent)]">
            Pending
          </span>
        </h1>

        <p className="font-mono text-sm sm:text-base opacity-60 max-w-md mx-auto leading-relaxed mb-8">
          The terminal is currently silent. Archiving thoughts, technical
          deep-dives, and system configurations.
        </p>

        {/* Blinking Terminal Prompt */}
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm opacity-70 bg-[var(--text-color)]/5 px-4 py-2 rounded border border-[var(--text-color)]/10">
          <span className="text-[var(--accent)]">❯</span>
          <span>sys.status --check</span>
          <span className="w-2 h-4 bg-[var(--text-color)] animate-[pulse_1s_ease-in-out_infinite]"></span>
        </div>
      </div>
    </div>
  );
}
