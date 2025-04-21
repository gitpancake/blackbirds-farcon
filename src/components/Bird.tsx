"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const Bird = () => {
  const [loaded, setLoaded] = useState(true);

  const [birdImage, setBirdImage] = useState("/assets/bird-black.svg");

  const randomBird = useCallback(async () => {
    const random = Math.random();

    setLoaded(false);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    });

    if (random < 0.75) {
      setBirdImage("/assets/bird-white.svg");
    } else {
      setBirdImage("/assets/bird-black.svg");
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      randomBird();
    }, Math.random() * 15000 + 1000);

    return () => clearInterval(interval);
  }, []);

  return <Image src={birdImage} width={1920} height={1080} alt="Blackbird logo" className={`ease-in-out transition-all duration-5000 p-2 ${loaded ? "opacity-100" : "opacity-0"}`} />;
};
