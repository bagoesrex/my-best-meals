"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/app/assets/burger.jpg";
import curryImg from "@/app/assets/curry.jpg";
import dumplingsImg from "@/app/assets/dumplings.jpg";
import macncheeseImg from "@/app/assets/macncheese.jpg";
import pizzaImg from "@/app/assets/pizza.jpg";
import schnitzelImg from "@/app/assets/schnitzel.jpg";
import tomatoSaladImg from "@/app/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative size-64 rounded-lg overflow-hidden shadow-lg">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          fill
          priority={index === 0}
          className={`transition-all duration-500 ease-in-out object-cover absolute top-0 left-0 w-full h-full
        ${
          index === currentImageIndex
            ? "opacity-100 z-10 scale-100 translate-x-0 rotate-0"
            : "opacity-0 z-0 scale-110 -translate-x-4 -rotate-3"
        }
      `}
        />
      ))}
    </div>
  );
}
