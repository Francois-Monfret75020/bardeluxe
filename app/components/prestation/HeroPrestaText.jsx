"use client"
import React from "react";
import AniamtionText from "../../ui/AniamtionText"; // Assurez-vous que le chemin est correct



const HeroPrestaText = ({ title, text, }) => {
  return (
    <div
      id="text-container"
      className={`flex   w-full p-8 md:p-12 lg:p-16  md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-2 h-auto text-center justify-center items-center flex-col gap-y-4`}
    >
      <AniamtionText
        text={title}
        el="h1"
        className="title "
        once={true}
      />
      <div className="flex flex-col w-full items-center justify-center lg:w-[50vw] h-12 gap-y-0.5">
        <div className="flex lg:w-1/4 w-2/4 h-0.5 bg-creme"></div>
        <div className="flex lg:w-1/4 w-2/4 h-0.5 bg-creme"></div>
      </div>
      {text && (
        <div className="leading-10 p-4 text-sm  font-extralight lg:w-[50vw]">
         <p className="text">{text}</p> 
        </div>
      )}
    </div>
  );
};

export default HeroPrestaText;