"use client";
import React from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const slider1 = [
  "BarCocktail/medeBG2.jpeg?updatedAt=1724603759907",
  "BarCocktail/team2.jpg?updatedAt=1724603760554",
  "BarCocktail/medeService.jpeg?updatedAt=1724603760219",
];
const slider2 = [
  "BarCocktail/medericFlame.jpeg?updatedAt=1724603760182",
  "BarCocktail/team2.jpg?updatedAt=1724603760554",
  "BarCocktail/WhatsApp%20Image%202024-08-26%20at%2020.17.45.jpeg?updatedAt=1724696378212",
];

function SliderHero() {
  return (
    <div className="flex flex-col gap-[3vw] relative mt-[200px] bg-red-400 z-[1] overflow-hidden">
      <div className="flex relative gap-[3vw] w-full overflow-hidden">
        {slider1.map((slide, index) => {
          console.log(slide); // Ajout du console.log pour afficher la valeur de slide
          return (
            <div key={index} className="flex-shrink-0 w-[50%] h-[25vh] flex justify-center items-center">
              <div className="w-[80%] h-[80%] relative">
                <IKImage
                  className="object-cover"
                  urlEndpoint={urlEndpoint}
                  path={slide}
                  alt="image"
                  transformation={[
                    {
                      height: "400",
                      width: "500",
                    },
                  ]}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex relative gap-[3vw] w-full overflow-hidden mt-[3vw]">
        {slider2.map((slide, index) => {
          console.log(slide); // Ajout du console.log pour afficher la valeur de slide
          return (
            <div key={index} className="flex-shrink-0 w-[50%] h-[25vh] flex justify-center items-center">
              <div className="w-[80%] h-[80%] relative">
                <IKImage
                  className="object-cover"
                  urlEndpoint={urlEndpoint}
                  path={slide}
                  alt="image"
                  transformation={[
                    {
                      height: "400",
                      width: "500",
                    },
                  ]}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SliderHero;