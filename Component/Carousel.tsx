"use client";

import Image from "next/image";
import { Techs } from "@/Component/TechStack";
import { useState } from "react";

export default function Carousel({ tech }: { tech: Techs[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < 1
        ? (prevIndex - 1 + tech.length) % tech.length
        : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tech.length);
  };

  const prev =
    currentIndex < 1
      ? (currentIndex - 1 + tech.length) % tech.length
      : currentIndex - 1;
  const next = (currentIndex + 1) % tech.length;

  return (
    <div className="flex flex-row items-center justify-center w-full bg-white text-black md:py-8 py-4 flex-nowrap">
      <Image
        src={"/img/left-arrow.svg"}
        alt="prev"
        width={24}
        height={24}
        onClick={handlePrev}
        className="cursor-pointer"
      />
      <div className="flex flex-row items-center justify-start w-full overflow-x-auto">
        <div
          className={`aspect-square lg:w-50 max-lg:w-27 bg-cover bg-center scale-50 brightness-50`}
          style={{ backgroundImage: `url('${tech[prev].iconURL}')` }}
        ></div>
        <div
          className="aspect-square lg:w-50 max-lg:w-27 bg-cover bg-center"
          style={{ backgroundImage: `url('${tech[currentIndex].iconURL}')` }}
        ></div>
        <div
          className={`aspect-square lg:w-50 max-lg:w-27 bg-cover bg-center scale-50 brightness-50`}
          style={{ backgroundImage: `url('${tech[next].iconURL}')` }}
        ></div>
      </div>
      <Image
        src={"/img/right-arrow.svg"}
        alt="next"
        width={24}
        height={24}
        onClick={handleNext}
        className="cursor-pointer"
      />
    </div>
  );
}