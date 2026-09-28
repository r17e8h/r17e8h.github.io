export default function About({ currentLore }: { currentLore: any }) {
  return (
    <div
      className="animate-fade-in space-y-6 p-8 md:p-12 border border-[var(--text-color)]/10 rounded-2xl backdrop-blur-md"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      {/* Heading uses Outfit font */}
      <h1 className="font-heading text-3xl md:text-4xl text-[var(--accent)] uppercase font-bold tracking-wide border-b border-current pb-4 mb-6">
        Detailed Intel
      </h1>

      {/* Body text automatically inherits Space Mono */}
      <div className="text-base md:text-lg leading-relaxed space-y-6 opacity-90">
        <blockquote className="font-quote border-l-4 border-[var(--accent)] pl-5 italic text-lg md:text-xl opacity-90">
          {currentLore.quote2}
        </blockquote>
        <p>Hey, I'm Ritesh. Usually known by the r17e8h handle.</p>
        <p>
          My daily driver is Fedora Linux running GNOME on Wayland (with some
          Niri and DankMaterialShell customization). I live in Ghostty and
          Neovim for my C++ and full-stack workflows.
        </p>
        <p>
          When I'm not configuring dotfiles, fixing SSH connectivity issues, or
          dealing with WebAssembly bindings, I'm usually out running, analyzing
          grandmaster chess games, or tweaking my custom PyTorch Lichess engine.
        </p>
      </div>
    </div>
  );
}
