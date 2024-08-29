"use client"
import React, { useRef } from "react";
import HeroPresta from "../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../components/prestation/HeroPrestaText";
import Chiffre from "../components/info/chiffre";
import { infoData, infoData2 } from "../content/Info content/infoContent";
import ListContent from "../components/prestation/ListContent";


const Info = () => {




  return (
    <div className="h-auto w-full">
      <HeroPresta
        src={infoData.src}
        height={"100vh"}
        text={true}
        alt={infoData.alt}
        info={true}
      />
      <HeroPrestaText
        title={infoData.heroTitlle}
        text={infoData.heroText}
        heigth={"40vh"}
  
      />
      <Chiffre  data={infoData} />
      <HeroPrestaText title={infoData.title2} text={null} />
      <ListContent
        content={infoData2}
        height={"1900px"}
        mobileHeight={"1200px"}
        show={false}
      />
    </div>
  );
};

export default Info;
