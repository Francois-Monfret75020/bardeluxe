import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import mederic from "../../../public/mederic.mp4";

function Hero() {
  return (
    <div className=" bg-white   w-full mt-8">
      <div id="text-container" className="p-4">
        <h1 className="text-4xl text-center font-thin tracking-wide ">
          BAR EVENTS
        </h1>
        <h2
          className="text-2xl text-center font-thin mt-4 tracking-wide leading-normal
      "
        >
          SPÉCIALISTE DU BAR ÉPHÉMERE POUR VOS ANIMATION COCKTAILS
        </h2>
      </div>
      <div
        id="video-and-text-container"
        className="relative flex justify-center w-full h-[700px] md:h-[800px] items-center xl:h-[1300px] xl:justify-center mt-8 "
      >
        <div
          className="absolute left-10 xl:left-72 top-4 h-[400px] md:h-[600px] w-4/6 bg-creme flex flex-col"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.15) -1.95px -1.95px 2.6px',
          }}
        >
          <h2 className="uppercase p-2 font-medium">Lorem ipsum dolor sit .</h2>
          <p className="p-2 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            blanditiis voluptatum, reprehenderit veritatis, doloremque facilis
            omnis repellat numquam obcaecati ad nihil eveniet! Tenm.
          </p>
        </div>

        <video
          src={mederic}
          autoPlay
          muted
          loop
          className="absolute right-12  xl:right-64 w-4/6 bottom-8 xl:top-72 h-[400px] md:h-[600px] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
