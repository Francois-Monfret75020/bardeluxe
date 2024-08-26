import React from "react";
import Image from "next/image";

const List = ({ title, textArray, src }) => {
  return (
    <div className="relative flex-col lg:h-[55vh] md:h-[50vh] h-[40rem] flex ">
      <Image src={src} alt="Background Image" fill className="object-cover" />
      <div className="relative flex flex-col p-4 h-full w-full ">
        <div className="flex items-center justify-center w-full ">
          <div className="bg-creme p-4 h-[12vh] lg:w-[60%] lg:text-3xl md:w-full md:text-3xl text-xl text-center flex items-center justify-center relative top-4 md:top- rounded-sm">
          <h2 className="uppercase font-thin h-auto whitespace-normal ">{title}</h2>
          </div>
        </div>

        <div
          id="sub-container"
          className="flex flex-col md:flex w-full h-full md:items-center relative mx-auto gap-y-4 "
        >
          <div
            id="row1"
            className="flex flex-col gap-x-4 md:flex-row justify-center items-center h-auto gap-y-4 "
          >
            <div className="bg-white opacity-70 flex w-[80vw] rounded-sm max-w-[30rem] md:h-[12vh] md:max-w-[20rem] items-center justify-center p-2 mx-auto">
              <div className="text-2xl font-thin flex items-center justify-center min-w-[2em]">
                1
              </div>
              <div className="flex justify-center items-center font-extralight  text-sm p-4 min-w-[5em] max-w-[20rem]">
                {textArray[0]}
              </div>
            </div>
            <div className="bg-white opacity-70 flex w-[80vw] rounded-sm max-w-[30rem] md:max-w-[20rem] md:h-[12vh] items-center justify-center p-2 mx-auto">
              <div className="text-2xl font-thin flex items-center justify-center min-w-[2em]">
                2
              </div>
              <div className="flex justify-center items-center font-extralight  text-sm p-4 min-w-[5em] max-w-[20rem]">
                {textArray[1]}
              </div>
            </div>
          </div>

          <div
            id="row2"
            className="flex flex-col gap-x-4 md:flex-row justify-center items-center gap-y-4 h-auto"
          >
            <div className="bg-white opacity-70 flex w-[80vw] rounded-sm max-w-[30rem] md:max-w-[20rem] md:h-[12vh] items-center justify-center p-2 mx-auto">
              <div className="text-2xl font-thin flex items-center justify-center min-w-[2em]">
                3
              </div>
              <div className="flex justify-center items-center font-extralight  text-sm p-4 min-w-[5em] max-w-[20rem] opacity-100">
                {textArray[2]}
              </div>
            </div>
            <div className="bg-white opacity-80 flex w-[80vw] rounded-sm max-w-[30rem] md:max-w-[20rem] md:h-[12vh] items-center justify-center p-2 mx-auto">
              <div className="text-2xl font-thin flex items-center justify-center min-w-[2em]">
                4
              </div>
              <div className="flex justify-center items-center font-extralight  text-sm min-w-[5em] max-w-[20rem] p-4">
                {textArray[3]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
