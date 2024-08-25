"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import ListContent from "../../components/prestation/ListContent";
import List from "../../components/prestation/List";
import { HeroPrestaMariage } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaMariage } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaMariageContent } from "../../content/Presta Page Content/prestaPageText";

const presta = () => {
  return (


    <main className="h-full w-screen">
      <HeroPrestaPhoto
        src={HeroPrestaMariage.src}
        alt={HeroPrestaMariage.alt}
      />
      <HeroPrestaText
        title={HeroPrestaMariage.title}
        text={HeroPrestaMariage.text}
  
        type={"mariage"}
      />
      <List
        src={ListPrestaMariage.src}
        title={ListPrestaMariage.title}
        textArray={ListPrestaMariage.text}
      />

      <ListContent content={ListPrestaMariageContent} />
    </main>
 
  );
};

export default presta;
