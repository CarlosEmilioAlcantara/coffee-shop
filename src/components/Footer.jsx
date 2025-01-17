import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  const mainControls = useAnimation();

  useEffect(() => {
    function handleScrollBottom() {
      if (
        window.innerHeight + 50 + Math.round(window.scrollY) >=
        document.body.offsetHeight
      ) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScrollBottom);
    return () => window.removeEventListener("scroll", handleScrollBottom);
  }, []);

  useEffect(() => {
    if (showFooter) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [showFooter]);

  return (
    <motion.footer
      className="fixed bottom-0 flex flex-col justify-center gap-1 items-center w-full h-16 bg-green border-t-[1px] border-white font-serif text-white text-center"
      variants={{
        hidden: { y: 75 },
        visible: { y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75 }}
    >
      <h3>Copyright 2025</h3>
      <a
        href="https://www.flaticon.com/free-icons/matcha"
        title="matcha icons"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs"
      >
        Matcha icons created by amonrat rungreangfangsai - Flaticon
      </a>
    </motion.footer>
  );
}
