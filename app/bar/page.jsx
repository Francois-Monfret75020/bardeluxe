"use client";

import HeroPrestaPhoto from "../components/prestation/HeroPrestaPhoto";
import HeroPrestaText from "../components/prestation/HeroPrestaText";
import ListContent from "../components/prestation/ListContent";
import List from "../components/prestation/List";
import CardDemo from "../ui/CardDemo";
import { HeroPrestaMariage } from "../content/Presta Page Content/prestaPageText";
import { ListPrestaMariage } from "../content/Presta Page Content/prestaPageText";
import { PrestaTextGames } from "../content/Presta Page Content/prestaPageText";
import { GamesContent } from "../content/Presta Page Content/prestaPageText";
import { ListPrestaMariageContent } from "../content/Presta Page Content/prestaPageText";

const Bars = () => {
  return (
    <main className="h-full w-screen bg-black">
      <HeroPrestaPhoto
        src={HeroPrestaMariage.src}
        alt={HeroPrestaMariage.alt}
        info={false}
      />
      <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={HeroPrestaMariage.title}
          text={HeroPrestaMariage.text}
          type={"mariage"}
        />
      </div>
      <List
        src={ListPrestaMariage.src}
        title={ListPrestaMariage.title}
        textArray={ListPrestaMariage.text}
      />
      <ListContent content={ListPrestaMariageContent} />

      <div
        className="w-full h-auto flex justify-center items-center"
        id="compenent-text-container"
      >
        <HeroPrestaText
          title={PrestaTextGames.title}
          text={PrestaTextGames.text}
          type={"mariage"}
        />
      </div>
      <div
        id="card-container"
        className="w-full h-auto flex flex-col sm:flex-row  justify-center items-center"
      >
        {GamesContent.map((game, index) => (
          <CardDemo
            key={index}
            title={game.title}
            text={game.text}
            url={game.url} // Pass the entire array of URLs
          />
        ))}
      </div>
    </main>
  );
};

export default Bars;
