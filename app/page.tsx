"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Slider from "./components/hero/Images-slider";
import Hero from "./components/hero/Hero";

import { prestaData } from "./content/Presta Hero content/prestationContent";
import Card from "./ui/Card"; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <>
      <main className=" h-full">
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
            return <Card key={index} {...prestaData} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
