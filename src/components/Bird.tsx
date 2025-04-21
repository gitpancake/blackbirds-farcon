"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const Bird = () => {
  const [loaded, setLoaded] = useState(true);

  const [birdImage, setBirdImage] = useState("/assets/bird-black.svg");

  const randomBird = useCallback(async () => {
    setLoaded(false); // fade out
    await new Promise((r) => setTimeout(r, 5000));

    setBirdImage(Math.random() < 0.75 ? "/assets/bird-white.svg" : "/assets/bird-black.svg");

    setLoaded(true); // fade in
  }, []);

  useEffect(() => {
    const id = setInterval(randomBird, Math.random() * 15000 + 1000);
    return () => clearInterval(id);
  }, [randomBird]);

  return (
    <Image
      src={birdImage}
      width={1920}
      height={1080}
      alt="Blackbird logo"
      className={`ease-[cubic-bezier(0.37,0,0.63,1)] transition-opacity duration-[4s] p-2 will-change-opacity ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
};
