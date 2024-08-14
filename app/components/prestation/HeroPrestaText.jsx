import React from "react";

const HeroPrestaText = ({ title, text }) => {
  return (
    <div
      id="text-container"
      className="flex p-4  text-center justify-center items-center flex-col pt-12 mb-8"
    >
      <h1 className="text-xl lg:text-3xl font-thin uppercase  leading-relaxed">{title}</h1>
      <div className="  flex  flex-col w-full items-center justify-center lg:w-[20vw] h-24 gap-y-0.5">
        <div className=" flex  w-3/4 h-0.5 bg-creme"></div>
        <div className=" flex w-3/4 h-0.5  bg-creme"></div>
      </div>
      <p className="leading-10 p-4 text-sm font-extralight lg:w-[40vw]">{text}</p>
    </div>
  );
};

export default HeroPrestaText;
