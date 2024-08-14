"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ src, alt, description, buttonText }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div id="card-container" className="flex  flex-col w-full  justify-center items-center   ">
      <div ref={container} id="card"className="h-[400px] xl:[400px] w-4/5 flex justify-center">
        <div
          id="image-container"
          className="w-full h-full flex relative overflow-hidden justify-center"
        >
          <motion.div
            id="iner"
            style={{ scale }}
            className="relative flex w-full h-full "
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="absolute inset-0 object-cover" 
            
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-white font-light text-lg mb-8">
                {description}
              </p>
              <button className="text-white py-2 px-4 font-light border-2 border-white">
                {buttonText}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <motion.div className="w-full h-2/6 flex flex-col bg-red-50 justify-center items-center p-4 mt-8">
          <p className="text-center font-extralight">
            NOS BARS ÉPHÉMERES ET
            <br /> NOS ANIMATIONS COCKTAILS
          </p>
          <div className="border border-red-100  w-2/5 mt-3"></div>{" "}
          <div className="border border-red-100  w-2/5 mt-1 mb-3"></div>
        </motion.div>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`w-full flex h-1/6 ${image.bgColor} relative`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              style={{ objectFit: "cover", maxHeight: "20%" }}
              quality={100}
            />
  
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-white font-light text-xl mb-8">
                {image.description}
              </p>
              <button className="text-white py-2 px-4 font-light border-2 border-white">
                {image.buttonText}
              </button>
            </div>
          </motion.div>
        ))} */
}

{
  /* <motion.div  className="w-full h-full">
          <Image src={src} alt={alt} objectFit="cover" />
        </motion.div> */
}
{
  /* <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p className="text-white font-light text-xl mb-8">{description}</p>
          <button className="text-white py-2 px-4 font-light border-2 border-white">
            {buttonText}
          </button>
        </div> */
}
