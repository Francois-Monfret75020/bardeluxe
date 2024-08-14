import React from "react";
import Image from "next/image";


const HeroPresta = ({src}) => {
  return (
    <div className="relative  h-[70vh] ">
      <Image
        src={src}
        alt="Une mariée heureuse avec un bouquet de fleur"
        fill
        style={{ objectFit: "cover" }}
        priority
        quality={100}
      />
    </div>
  );
};

export default HeroPresta;
