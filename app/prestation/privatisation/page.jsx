"use client";

import HeroPrestaPhoto from "../../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../../components/prestation/HeroPrestaText";
import List from "../../components/prestation/List";
import ListContent from "../../components/prestation/ListContent";
import { HeroPrestaPrivate } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPrivate } from "../../content/Presta Page Content/prestaPageText";
import { ListPrestaPrivateContent } from "../../content/Presta Page Content/prestaPageText";

const presta = () => {
  return (
    
    <main className="min-h-screen w-full">
      <HeroPrestaPhoto src={HeroPrestaPrivate.src} alt={HeroPrestaPrivate.alt}/>
      <HeroPrestaText
        title={HeroPrestaPrivate.title}
        text={HeroPrestaPrivate.text}
      />
      <List
        src={ListPrestaPrivate.src}
        title={ListPrestaPrivate.title}
        textArray={ListPrestaPrivate.text}
      />

<ListContent  content={ListPrestaPrivateContent} />
    </main>
  );
};

export default presta;
