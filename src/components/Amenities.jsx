import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import image1 from "../assets/amenities/amenities1.jpg";
import image2 from "../assets/amenities/amenities2.jpg";
import image3 from "../assets/amenities/amenities3.jpg";
import image4 from "../assets/amenities/amenities4.jpg";

const images = [image1, image2, image3, image4];

export default function Amenities() {
  const amenities = [
    {
      image: images[0],
      title: "Lorem Ipsum",
      caption: `
            Lorem ipsum dolor sit amet consectetur. Tristique turpis ullamcorper
            parturient odio nibh egestas. Mattis turpis amet a tortor neque mi.
            Feugiat curabitur nunc id lobortis euismod. Lorem eget lacus
            faucibus diam integer vestibulum neque.
      `,
    },
    {
      image: images[1],
      title: "Lorem Ipsum",
      caption: `
            Lorem ipsum dolor sit amet consectetur. Tristique turpis ullamcorper
            parturient odio nibh egestas. Mattis turpis amet a tortor neque mi.
            Feugiat curabitur nunc id lobortis euismod. Lorem eget lacus
            faucibus diam integer vestibulum neque.
      `,
    },
    {
      image: images[2],
      title: "Lorem Ipsum",
      caption: `
            Lorem ipsum dolor sit amet consectetur. Tristique turpis ullamcorper
            parturient odio nibh egestas. Mattis turpis amet a tortor neque mi.
            Feugiat curabitur nunc id lobortis euismod. Lorem eget lacus
            faucibus diam integer vestibulum neque.
      `,
    },
    {
      image: images[3],
      title: "Lorem Ipsum",
      caption: `
            Lorem ipsum dolor sit amet consectetur. Tristique turpis ullamcorper
            parturient odio nibh egestas. Mattis turpis amet a tortor neque mi.
            Feugiat curabitur nunc id lobortis euismod. Lorem eget lacus
            faucibus diam integer vestibulum neque.
      `,
    },
  ];

  return (
    <div id="amenities" className="w-full">
      <div className="flex flex-col items-center gap-9 md:gap-0">
        {amenities.map((amenity, index) => (
          <Amenity key={index} amenity={amenity} index={index} />
        ))}
      </div>
    </div>
  );
}

function Amenity({ amenity, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return(
    <motion.div
      ref={ref} 
      className="relative w-full flex flex-col md:flex-row"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <div
        style={{ backgroundImage: `url(${amenity.image})` }}
        className={`h-[320px] bg-center bg-cover md:w-[50vw] md:h-[500px] ${
          index % 2 === 0
            ? "md:order-1 md:left-0"
            : "md:order-2 md:right-0"
        }`}
      ></div>

      <div
        className={`flex flex-col justify-center px-8 py-8 text-center text-blue md:w-[50vw] md:pb-0 ${
          index % 2 === 0
            ? "md:order-2 md:text-right"
            : "md:order-1 md:text-left"
        } `}
      >
        <h2 className="pb-3 text-xl font-bold lg:pb-9 sm:text-2xl md:text-4xl lg:text-6xl">
          {amenity.title}
        </h2>

        <p className="lg:text-xl">{amenity.caption}</p>
      </div>
    </motion.div>
  );
}