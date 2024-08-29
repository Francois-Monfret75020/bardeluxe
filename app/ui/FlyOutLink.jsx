// FlyoutLink.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlyoutLink = ({ name, FlyOutContent, toggleOpen }) => {
  const [isOpen, setOpen] = useState(false);

  const showFlyOut = FlyOutContent && isOpen;

  
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-fit w-fit relative z-50 "
    >
      <div className=" cursor-pointer  transition relative">
        {name}
        <span
          style={{ transform: showFlyOut ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute lg:top-6  top-8 -right-2 mx-auto h-1 w-[120%] origin-left rounded-full bg-white transition-transform duration-300 ease-out"
        ></span>
      </div>
      <AnimatePresence>
        {showFlyOut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bg-greeno top-12 border left-1/2 rounded-s "
          >
            {" "}
            <div className="absolute -top-6 left-0 h-6 right-0 bg-transparent text-white" />{" "}
            <FlyOutContent toggleOpen={toggleOpen} />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
