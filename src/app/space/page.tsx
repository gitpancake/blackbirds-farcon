"use client";

import { useEffect, useState } from "react";
import { Bird } from "~/components/Bird";

export default function Home() {
  /* ********  CONFIG  ******** */
  const CELL = 32; // px – matches Tailwind w-8 / h-8 below

  /* Tiles to render */
  const [tiles, setTiles] = useState(0);

  /* Calculate rows × columns only in the browser */
  useEffect(() => {
    const calc = () => {
      const rows = Math.ceil(window.innerHeight / CELL);
      const cols = Math.ceil(window.innerWidth / CELL);
      setTiles(rows * cols);
    };

    calc(); // first paint
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [CELL]);

  return (
    <main className="min-h-screen flex flex-wrap">
      {Array.from({ length: tiles }).map((_, i) => (
        <div key={i} className="w-8 h-8 flex items-center justify-center">
          {/* SVG is already a vector; no need for huge width/height props */}
          <Bird />
        </div>
      ))}
    </main>
  );
}
