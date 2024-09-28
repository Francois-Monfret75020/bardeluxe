"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import { HeroPrestaPiano } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPiano } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelierContent } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    
    <main className="min-h-screen w-full">
      <HeroPrestaPhoto src={HeroPrestaPiano.src}  alt={HeroPrestaPiano.alt} info={false}/>
      <HeroPrestaText
        title={HeroPrestaPiano.title}
        text={HeroPrestaPiano.text}
      />
      <List
        src={ListPrestaPiano.src}
        title={ListPrestaPiano.title}
        textArray={ListPrestaPiano.text}
      />
            <ListContent  content={ListPrestaAtelierContent} />
    </main>
  );
};

export default Presta;
