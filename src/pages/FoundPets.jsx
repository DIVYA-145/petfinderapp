import React from "react";
import CardsGrid from "../components/CardsGrid";
import { getPets } from "../utils/storage";

export default function FoundPets(){
  const pets = getPets("foundPets");
  return (
    <section className="section found-pets-page">
      <h1>Recently Found Pets</h1>
      <p className="section-subtitle">These pets have been reported as found. Help us reunite them with their owners!</p>
      <CardsGrid pets={pets} mode="found" />
    </section>
  );
}
