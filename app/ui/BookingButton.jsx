"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BookingButton = ({ text }) => {
  const [opacity, setOpacity] = useState(1);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 500, 0); // Ajustez la valeur 500 selon vos besoins
      setOpacity(newOpacity);

      scrollTimeout = setTimeout(() => {
        setOpacity(1);
      }, 300); // Ajustez le délai selon vos besoins
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <Link href="/booking" passHref>
      <motion.button
        initial={{ y: 0 }}
        animate={{ y: 5 }}
        exit={{ x: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ opacity }}
        className="px-6 py-2 bg-greeno text-sm  text-white rounded transform hover:-translate-y-1 transition duration-400 font-thin"
      >
        {text}
      </motion.button>
    </Link>
  );
};

export default BookingButton;