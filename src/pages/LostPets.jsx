import React from "react";
import CardsGrid from "../components/CardsGrid";
import { getPets } from "../utils/storage";

export default function LostPets(){
  const pets = getPets("lostPets");
  return (
    <section className="section lost-pets-page">
      <h1>Recently Reported Lost Pets</h1>
      <p className="section-subtitle">Browse pets that have been reported missing. If you recognize any, help contact their owners.</p>
      <CardsGrid pets={pets} mode="lost" />
    </section>
  );
}
