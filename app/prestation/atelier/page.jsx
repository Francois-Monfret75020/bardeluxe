"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import { HeroPrestaAtelier } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelier } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaAtelierContent } from "../../content/Presta Page Content/prestaPageText";

const Presta = () => {
  return (
    
    <main className="min-h-screen w-full">
      <HeroPrestaPhoto src={HeroPrestaAtelier.src}  alt={HeroPrestaAtelier.alt} info={false}/>
      <HeroPrestaText
        title={HeroPrestaAtelier.title}
        text={HeroPrestaAtelier.text}
      />
      <List
        src={ListPrestaAtelier.src}
        title={ListPrestaAtelier.title}
        textArray={ListPrestaAtelier.text}
      />
            <ListContent  content={ListPrestaAtelierContent} />
    </main>
  );
};

export default Presta;
