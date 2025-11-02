import React from "react";
import dog from "../assets/dogpic.png";

export default function About(){
  return (
    <section className="section about-page">
      <div className="about-container">
        <div className="about-text">
          <h1>About PetFinder</h1>
          <p>PetFinder is a community-driven platform dedicated to helping lost pets find their way home. We connect pet owners and kind-hearted individuals who find stray or missing pets, making it easier to report, search, and reunite families with their furry friends.</p>
          <h3>Our Mission</h3>
          <ul>
            <li>Help lost pets reunite with their families.</li>
            <li>Empower the community to report and share missing animals easily.</li>
            <li>Spread awareness about pet safety and identification.</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={dog} alt="Happy pets with owners" />
        </div>
      </div>
    </section>
  );
}
