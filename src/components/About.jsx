import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <div ref={ref} id="about" className="w-full bg-white">
      <motion.div 
        className="flex flex-col justify-center items-center mx-auto p-16 max-w-[1240px] text-center text-blue"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.3 }}
      >
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">Coffee Shop</h2>

        <div className="flex flex-col gap-6 md:text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur. Pharetra feugiat est sed
            convallis aliquam. In dictum amet fringilla enim sed tortor aliquam.
            Vestibulum tincidunt dolor nisl rhoncus. Morbi leo hendrerit diam
            tempus sit placerat lacus sed. Tortor suspendisse diam nisi eget
            nunc. Blandit ultricies nunc eu nunc. Purus at molestie sed cum
            accumsan vestibulum auctor. Egestas sit malesuada diam sed risus sit
            velit. Volutpat sit mauris et vitae lobortis sagittis. Commodo
            tortor amet arcu ac nulla rhoncus. Lorem nisl a in velit amet.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Pharetra feugiat est sed
            convallis aliquam. In dictum amet fringilla enim sed tortor aliquam.
            Vestibulum tincidunt dolor nisl rhoncus. Morbi leo hendrerit diam
            tempus sit placerat lacus sed. Tortor suspendisse diam nisi eget
            nunc. Blandit ultricies nunc eu nunc. Purus at molestie sed cum
            accumsan vestibulum auctor. Egestas sit malesuada diam sed risus sit
            velit. Volutpat sit mauris et vitae lobortis sagittis. Commodo
            tortor amet arcu ac nulla rhoncus. Lorem nisl a in velit amet.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
