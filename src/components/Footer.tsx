import React, { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    updateClock(); // Set initial time immediately
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  return (
    <footer
      className="w-full border-t border-[var(--text-color)]/20 py-8 text-center backdrop-blur-lg mt-auto flex flex-col items-center justify-center gap-3"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      {/* Name Line */}
      <div className="text-[var(--text-color)] opacity-90 text-sm md:text-base tracking-wide">
        Designed & Developed by <span className="font-bold">Ritesh</span>
      </div>

      {/* Copyright Line */}
      <div className="font-mono text-[var(--text-color)] opacity-50 text-xs md:text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </div>

      {/* Location & Live Clock */}
      <div className="flex items-center gap-2 font-mono text-[var(--text-color)] opacity-50 text-xs md:text-sm mt-1">
        <div className="flex items-center justify-center w-3 h-3 rounded-full bg-emerald-500/20">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981]"></div>
        </div>
        <span>Delhi, India &middot; {time || "Loading..."}</span>
      </div>
    </footer>
  );
}
