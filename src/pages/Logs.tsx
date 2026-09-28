export default function Logs() {
  return (
    <div
      className="animate-fade-in space-y-6 p-8 md:p-12 border border-[var(--text-color)]/10 rounded-2xl backdrop-blur-md"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      {/* Heading uses Outfit font */}
      <h1 className="font-heading text-3xl md:text-4xl text-[var(--accent)] uppercase font-bold tracking-wide border-b border-current pb-4 mb-6">
        Dev Logs
      </h1>

      {/* Body text automatically inherits Space Mono */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed opacity-90">
        <div className="border-l-2 border-[var(--accent)] pl-4">
          <span className="text-sm opacity-70 block mb-1">Aug 2026</span>
          <p>
            Diagnosed and fixed SSH connectivity/TTY issues on the sudosync
            repository (Issue #4 resolved).
          </p>
        </div>
        <div className="border-l-2 border-[var(--accent)] pl-4">
          <span className="text-sm opacity-70 block mb-1">May 2026</span>
          <p>
            Updated the gnome-network-stats extension for GNOME 50 compatibility
            on Fedora 44 (PR #87 submitted, awaiting merge).
          </p>
        </div>
        <div className="border-l-2 border-[var(--accent)] pl-4">
          <span className="text-sm opacity-70 block mb-1">Apr 2026</span>
          <p>
            Converted an older Debian laptop into a headless server via SSH.
            Transferred 12.4 GB of backup data via rsync.
          </p>
        </div>
      </div>
    </div>
  );
}
