import React from "react";

const booking = () => {
  return (
    <div
      id="all-booking-type-conainter"
      className="lg:h-[92vh] h-auto lg:w-screen flex lg:flex-row flex-col "
    >
      <div
        id="whatsapp-containeur"
        className=" flex flex-col  h-auto lg:w-1/3 "
      >
        <div
          id="whatsapp"
          className="bg-red-200 w-full h-[60vh] lg:h-screen flex   flex-col  lg:flex-row  justify-between items-center  "
        >
          {" "}
          <div id="fake" style={{ visibility: "hidden" }}>
            content
          </div>
          <div
            id="whatps-content"
            className="rounded-full w-[10vh] h-[10vw] bg-white items-center flex justify-center"
          >
            <a href="https://wa.me/0649442587">Contact us</a>
          </div>
          <div
            id="or?"
            className="rounded-full w-[10vh] h-[100px] bg-white  items-center flex justify-center relative -bottom-12 lg:bottom-0 lg:-right-12"
          >
            OU
          </div>
        </div>
      </div>
      <div id="devis-containeur" className=" flex flex-col h-auto lg:w-1/3 ">
        <div
          id="devis"
          className="bg-green-200 w-full h-[60vh] flex lg:h-screen flex-col  lg:flex-row  justify-between items-center"
        >
          <div id="fake" style={{ visibility: "hidden" }}>
            content
          </div>

          <div
            id="devis-content"
            className="rounded-full w-[10vh] h-[10vw] bg-white items-center flex justify-center"
          >
            devis
          </div>
          <div
            id="or?"
            className="rounded-full w-[10vh] h-[100px] bg-white  items-center flex justify-center relative -bottom-12 lg:bottom-0 lg:-right-12"
          >
            OU
          </div>
        </div>
      </div>
      <div id="calendy-containeur" className=" flex flex-col h-auto lg:w-1/3  ">
        <div
          id="calendy"
          className="bg-blue-200  w-full  flex items-center justify-center lg:h-screen  lg:flex-row  h-[60vh]"
        >
          <div
            id="calendy-content"
            className="rounded-full w-[10vh] h-[10vw] bg-white items-center flex justify-center"
          >
            calendy
          </div>
        </div>
      </div>
    </div>
  );
};

export default booking;
