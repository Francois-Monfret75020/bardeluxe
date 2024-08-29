"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AniamtionText from "../../ui/AniamtionText";

const ListContent = ({ content, height, mobileHeight, show }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    handleResize();

    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex flex-col w-full h-auto items-center justify-center"
      style={{
        height: windowWidth < 768 ? mobileHeight : height,
      }}
    >
      {content.map((item, index) => (
        <div
          id={`title-text-and-image-container${index + 1}`}
          className={`flex flex-col md:flex-row w-[100vw] h-screen ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
          key={index}
        >
          <div
            id="title-and-text-container"
            className="flex flex-col w-full relative md:w-[50vw] justify-evenly md:justify-center md:items-center  md:gap-y-8 gap-y-8 mb-10 mt-10 md:mb-0"
          >
            {show && (
              <div
                id="number"
                className="flex items-center justify-center font-extralight absolute md:text-5xl text-3xl text-red-200 md:top-10 md:left-8 lg:left-50 top-0 left-2"
              >
                {index + 1}
              </div>
            )}
            <div
              id="titlte"
              className="flex flex-col items-start justify-center uppercase font-extralight mx-auto w-[85%]  text-center md:text-start"
            >
              <AniamtionText
                text={item.title}
                el="h2"
                className="title"
                once={true}
              />

              {show && (
                <div className="h-[10vh] w-4/6 flex-row" id="bar">
                  <div className="flex w-5/6 h-0.5 bg-creme relative top-10"></div>
                  <div className="flex w-3/6 h-0.5 bg-creme relative top-3 bg-transparent"></div>
                  <div className="flex w-5/6 h-0.5 bg-creme relative top-10"></div>
                </div>
              )}
            </div>
            <div id="text" className="w-full md:w-[50vw]">
              <div className="text-gray-500 mx-auto w-[85%] leading-8 text-sm font-extralight  text-center md:text-start">
                <p className="text">{item.text}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50vw] md:h-auto h-[45vh] relative">
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
