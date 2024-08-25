"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HeroPresta = ({ src, height , text , alt}) => {

const ref = useRef(null);
const isInView = useInView(ref)



  return (
    <div ref={ref} className="relative h-[70vh]" style={{ height: height }}>
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      priority
      quality={100}
    />
    {text && (
      <motion.div
        initial={{ opacity: 0 , x: -1000 }}
        animate={{ opacity: 1 , x : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute  flex flex-col  items-center justify-center gap-y-10 text-center h-full  w-full -bottom-5 "
        style={{
          textShadow: '0.5px 0.5px 0 gray, -0.5px -0.5px 0 gray, 0.5px -0.5px 0 gray, -0.5px 0.5px 0 gray',
        }}
      >
        <h2 className="text-white lg:text-7xl md:text-6xl uppercase text-3xl">Bar cocktails Event</h2>
        <h3 className="text-white lg:text-3xl md:text-2xl font-thin uppercase text-lg ">les spécialistes du bar mobile événementiel</h3>
      </motion.div>
    )}
  </div>
  );
};

export default HeroPresta;
