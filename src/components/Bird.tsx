"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const Bird = () => {
  const [loaded, setLoaded] = useState(false);

  const [birdImage, setBirdImage] = useState("/assets/bird-black.svg");

  const randomBird = useCallback(async () => {
    const random = Math.random();

    setLoaded(false);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    if (random < 0.5) {
      setBirdImage("/assets/bird-black.svg");
    } else {
      setBirdImage("/assets/bird-white.svg");
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    randomBird();

    const interval = setInterval(() => {
      randomBird();
    }, Math.random() * 5000 + 1000);

    return () => clearInterval(interval);
  }, []);

  return <Image src={birdImage} width={24} height={24} alt="Blackbird logo" className={`ease-in-out transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`} />;
};
