import React, { useEffect } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { motion, useAnimation } from "motion/react";

export default function Popup({
  open,
  error,
  title,
  notification
}) {
  if (!open) return null;

  const mainControls = useAnimation();

  useEffect(() => {
    if (open) {
      mainControls.start("visible");
    }
  }, [open]);

  return ReactDom.createPortal(
    <div className="flex justify-center">
      <motion.div
        className={`fixed top-16 p-4 rounded border-[1px] border-white shadow-xl text-white text-center z-10 md:left-[43%] ${
          error ? "bg-red-400" : "bg-green"
        }`}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="font-bold text-xl mb-4 md:text-2xl">{title}</h2>

        <p className="md:text-xl">{notification}</p>
      </motion.div>
    </div>,
    document.getElementById("portal")
  );
}

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  header: PropTypes.string,
  message: PropTypes.string,
};
