import React, { useEffect } from "react";
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import { motion } from "motion/react";

const images = [hero1, hero2, hero3];

export default function Hero() {
  let i = 0;

  useEffect(() => {
    const bannerBackgrounds = document.querySelectorAll(".bannerBg");

    const interval = setInterval(() => {
      setTimeout(() => {
        bannerBackgrounds[i].style.opacity = "0";
        i = (i + 1) % images.length;
        bannerBackgrounds[i].style.opacity = "1";
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full">
      <div
        style={{ backgroundImage: `url(${images[0]})` }}
        // style={{transition: "opacity 0.4s ease-in-out"}}
        className={`bannerBg absolute inset-0 w-full h-screen bg-center bg-cover transition-opacity ease-in-out duration-1000 opacity-100`}
      ></div>

      <div
        style={{ backgroundImage: `url(${images[1]})` }}
        // id="hero"
        // style={{transition: "opacity 0.4s ease-in-out"}}
        className={`bannerBg absolute inset-0 w-full h-screen bg-center bg-cover transition-opacity ease-in-out duration-1000 opacity-0`}
      ></div>

      <div
        style={{ backgroundImage: `url(${images[2]})` }}
        // id="hero"
        // style={{transition: "opacity 0.4s ease-in-out"}}
        className={`bannerBg absolute inset-0 w-full h-screen bg-center bg-cover transition-opacity ease-in-out duration-1000 opacity-0`}
      ></div>

      <div className="absolute inset-0 flex justify-center w-full h-screen bg-black bg-opacity-60 backdrop-filter backdrop-blur-[2px] ">
        <div className="flex flex-col justify-center max-w-[800px] text-center text-white">
          <motion.h1
            className="font-bold text-3xl py-9 sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, ease: "easeOut", delay:0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.h1>

          <motion.p 
            className="text-2xl pb-1 sm:text-4xl md:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, ease: "easeOut", delay:0.6 }}
          >
            Open Hours
          </motion.p>

          <motion.p 
            className="text-2xl text-brightGreen sm:text-4xl md:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, ease: "easeOut", delay:0.8 }}
          >
            Mon - Wed | 8:00AM - 9:00PM
          </motion.p>
        </div>
      </div>
    </div>
  );
}
