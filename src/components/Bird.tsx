"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const Bird = () => {
  const [loaded, setLoaded] = useState(true);
  const [birdImage, setBirdImage] = useState("/assets/bird-black.svg");

  const randomBird = useCallback(() => {
    // 1️⃣ fade out the current bird
    setLoaded(false);

    // wait for the fade‑out to finish
    setTimeout(() => {
      // 2️⃣ swap the source
      const nextSrc = Math.random() < 0.5 ? "/assets/bird-white.svg" : "/assets/bird-black.svg";
      setBirdImage(nextSrc);

      /* 3️⃣ let the new <img> paint once at opacity‑0,
             then start the fade‑in on the very next frame   */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setLoaded(true));
      });
    }, 4000); // ⬅️ matches your 4‑second fade‑out
  }, []);

  useEffect(() => {
    const id = setInterval(randomBird, Math.random() * 15000 + 1000);
    return () => clearInterval(id);
  }, [randomBird]);

  return (
    <Image
      key={birdImage} // make React replace <img> each time
      src={birdImage}
      width={1920}
      height={1080}
      alt="Blackbird logo"
      className={`
        transition-opacity
        duration-[4s]
        ease-[cubic-bezier(0.37,0,0.63,1)]
        will-change-opacity
        p-2
        ${loaded ? "opacity-100" : "opacity-0"}
      `}
    />
  );
};
