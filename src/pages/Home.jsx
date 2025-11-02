import React from "react";
import HeroSlider from "../components/HeroSlider";
import Testimonials from "../components/Testimonials";
import { getPets } from "../utils/storage";
import CardsGrid from "../components/CardsGrid";

export default function Home(){
  const recentLost = getPets("lostPets").slice(-3);
  const recentFound = getPets("foundPets").slice(-3);

  return (
    <>
      <HeroSlider />
      <section className="section">
        <div className="section-header">
          <h2>Recently Reported Lost Pets</h2>
          <a className="see-all" href="/lost-pets">See all</a>
        </div>
        <CardsGrid pets={recentLost} mode="lost" />
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Recently Found Pets</h2>
          <a className="see-all" href="/found-pets">See all</a>
        </div>
        <CardsGrid pets={recentFound} mode="found" />
      </section>

      <Testimonials />

      <section className="section about">
        <h2>About Us</h2>
        <p>PetFinder is a community-driven platform designed to help reunite lost pets with their families. We make reporting and discovering lost or found pets simple, fast and local.</p>
      </section>
    </>
  );
}

