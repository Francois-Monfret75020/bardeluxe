"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Slider from "./components/hero/Images-slider";
import Hero from "./components/hero/Hero";
import { prestaData } from "./content/Presta Hero content/prestationContent";
import Card from "./ui/Card"; // Assurez-vous que le chemin est correct
import Preloader from "./components/preloader/preloader";
import { CldUploadWidget } from "next-cloudinary";

const Home = () => {
  const [isLoaded, setIsLoading] = useState(true);




  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <main className="relative">
        {/* <AnimatePresence mode="wait">
          {isLoaded && <Preloader />}
        </AnimatePresence> */}
        <section className="h-screen">
          <Slider />
        </section>

    
        <section className="h-[950px] xl:h-[1400px]">
          <Hero />
        </section>
        <div
          id="prestation-container"
          className="flex h-[1800px] flex-col justify-evenly"
        >
          {prestaData.map((prestaData, index) => {
            return <Card key={index} {...prestaData} href={prestaData.link} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
