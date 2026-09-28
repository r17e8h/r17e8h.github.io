import React from "react";

export default function ChessBoard() {
  const squares = Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const isDark = (row + col) % 2 === 1;

    return (
      <div
        key={i}
        className={`w-full h-full ${isDark ? "bg-[var(--board-dark)]" : "bg-[var(--board-light)]"}`}
      />
    );
  });

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <div className="w-full aspect-square border-4 border-current grid grid-cols-8 grid-rows-8 pixelated">
        {squares}
      </div>
      <div className="mt-4 text-[var(--accent)] animate-pulse">
        Waiting for PyTorch Engine...
      </div>
    </div>
  );
}
