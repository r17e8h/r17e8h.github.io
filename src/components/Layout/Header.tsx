import React from "react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 border-b-4 border-current pb-4">
      <h1 className="text-4xl md:text-5xl uppercase tracking-widest mb-4 md:mb-0">
        Ritesh.exe
      </h1>
      <button onClick={toggleTheme} className="btn-retro">
        {theme === "light" ? "INIT DARK_MODE" : "INIT LIGHT_MODE"}
      </button>
    </header>
  );
}
