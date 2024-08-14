import React from "react";
import Image from "next/image";

const list = ({ title, textArray, src }) => {
  return (
    <div className="relative flex-col lg:h-[60vh] md:h-[50vh] h-[75vh] flex items-center justify-center ">
      <Image src={src} alt="Background Image" fill className="object-cover" />
      <div className="relative  flex flex-col p-4 h-full ">
        <div className="flex items-center justify-center w-full ">
          <div className="bg-creme p-4 h-[12vh] lg:w-[80%] lg:text-3xl md:w-full md:text-3xl text-xl flex items-center justify-center relative -top-39">
            <h2 className="uppercase font-thin text-center">{title}</h2>
          </div>
        </div>

        <div
          id="sub-container"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-2 w-full relative mx-auto  -top-5"
        >
          {textArray.map((text, index) => (
            <div
              key={index}
              className="bg-white opacity-85 flex w-[80vw] lg:w-[40vw] md:w-[40vw] md:h-[12vh] items-center justify-around p-2 mx-auto"
            >
              <div className="text-2xl font-thin flex items-center justify-center w-[25vw] md:w-[10vw]  lg:max-w-[2vw]  mx-auto">
                {index + 1}
              </div>
              <div
                id={index + 1}
                className="flex justify-center items-center font-extralight text-sm p-4 mx-auto"
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default list;
