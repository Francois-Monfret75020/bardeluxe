"use client";
import React, { useEffect, useRef, useState } from "react";
import { experienceArray } from "../../content/Info content/infoContent";
import { useInView } from "framer-motion";
import AnimatedCunter from "@/app/ui/AnimatedCunter";

const Chiffre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  return (
    <div
      id="chiffre-containeur"
      className="flex flex-col w-full info:h-[30vh] h-[900px]  bg-creme border justify-center info:justify-evenly items-center"
      ref={ref}
    >
      <div
        id="row1"
        className="flex info:flex-row lg:justify-center lg:h-40 flex-col gap-y-2 w-full info:item-center"
      >
        {experienceArray.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="lg:w-[25%] info:h-full  w-full h-32 flex flex-col justify-center items-center"
          >
            <div className="flex relative justify-start w-[12rem] items-center">
              <div className="absolute -left-8 -top-2 text-gray-500 font-bold text-3xl">
                +
              </div>
              <div className="flex w-48 font-bold text-gray-500 text-2xl font-mono">
                {startAnimation && (
                  <AnimatedCunter 
                    from={0}
                    to={item.yearsOfExperience}
                    isInView={isInView}
                  />
                )}
              </div>
            </div>
            <div className=" flex justify-start w-48">{item.info}</div>
          </div>
        ))}
      </div>
      <div
        id="row2"
        className="flex info:flex-row lg:justify-center lg:h-40 flex-col gap-y-2 w-full"
      >
        {experienceArray.slice(3, 6).map((item, index) => (
          <div
            key={index}
            className="lg:w-[25%] w-full  info:h-full h-32 flex flex-col justify-center items-center"
          >
            <div className="flex relative justify-start w-[12rem] items-center ">
              <div className="absolute -left-8 -top-2 text-gray-500 font-bold text-3xl">
                +
              </div>
              <div className="flex w-48 font-bold text-gray-500 text-2xl ">
                {startAnimation && (
                  <AnimatedCunter 
                    from={0} 
                    to={item.yearsOfExperience} 
                    isInView={isInView}
                  />
                )}
              </div>
            </div>
            <div className=" flex justify-start  w-[15rem] ml-12">
              {item.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chiffre;