import React from "react";
import Image from "next/image";

const ListContent = ({ content }) => {
  return (
    <div className="flex flex-col w-full h-auto md:mt-20 mt-10">
      {content.map((item, index) => (
        <div
          id="title-text-and-image-container"
          className={`flex flex-col md:flex-row w-[100vw] ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
          key={index}
        >
          <div
            id="title-and-text-container"
            className="flex flex-col h-[60vh] w-full relative md:w-[50vw] justify-evenly md:justify-center md:items-center md:h-[95vh] md:gap-y-8 mb-10 md:mb-0"
          >
            <div
              id="number"
              className="flex items-center justify-center font-extralight absolute text-5xl text-red-200 md:top-5"
              style={{ top: "0px" }}
            >
              {index + 1}
            </div>

            <div
              id="titlte"
              className="flex flex-col items-start justify-center uppercase font-extralight mx-auto w-[85%] text-xl"
            >
              {item.title}
              <div className="h-[10vh] w-4/6 flex-row" id="bar">
                <div className="flex w-5/6 h-0.5 bg-creme relative top-10"></div>
                <div className="flex w-3/6 h-0.5 bg-creme relative top-3 bg-transparent"></div>
                <div className="flex w-5/6 h-0.5 bg-creme relative top-10"></div>
              </div>
            </div>
            <div id="text" className="w-full md:w-[50vw]">
              <div className="text-gray-500 mx-auto w-[85%] leading-8 text-sm font-extralight mb-12">
                {item.text}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50vw] md:h-[95vh] h-[45vh] relative">
            <Image
              src={item.src}
              alt="hero"
              fill
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListContent;