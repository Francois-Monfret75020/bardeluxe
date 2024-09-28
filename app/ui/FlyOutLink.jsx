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
      <div className=" cursor-pointer hover:text-creme transition relative">
        {name}
        <span
          style={{ transform: showFlyOut ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute  md:top-8 md:left-0 top-9 left-0 mx-auto h-1 w-[100%] origin-left rounded-full bg-creme transition-transform duration-300 ease-out"
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
            <div className="absolute  -top-6 left-0 h-6 right-0 bg-transparent text-white" />{" "}
            <FlyOutContent toggleOpen={toggleOpen} />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
