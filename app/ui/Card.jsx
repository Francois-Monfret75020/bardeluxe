"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ src, alt, description, buttonText, href }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div id="card-container" className="flex flex-col w-full justify-center items-center">
      <div ref={container} id="card" className="h-[400px] xl:[400px] w-4/5 flex justify-center">
        <div
          id="image-container"
          className="w-full h-full flex relative overflow-hidden justify-center"
        >
          <motion.div
            id="iner"
            style={{ scale }}
            className="relative flex w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
              <p className="text-white font-extralight text-2xl mb-8 text-center">
                {description}
              </p>
              <Link href={href} legacyBehavior>
                <a className="text-white py-2 px-4 text-lg border-2 border-white font-thin">
                  {buttonText}
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;