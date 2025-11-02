import React from "react";

export default function CardsGrid({ pets = [], mode = "lost" }) {
  if (!pets || pets.length === 0) {
    return <div className="cards-grid"><div className="card placeholder">No reports yet</div></div>;
  }

  return (
    <div className="cards-grid">
      {pets.slice().reverse().map((pet, i) => (
        <div className="card" key={i}>
          <img src={pet.image || "/src/assets/placeholder.jpg"} alt={pet.name || pet.petType} />
          <div className="card-content">
            <h3>{pet.name || pet.petType}</h3>
            <p><strong>Breed:</strong> {pet.breed || "-"}</p>
            <p><strong>Location:</strong> {pet.location}</p>
            <p>{pet.description && (pet.description.length > 80 ? pet.description.slice(0,80) + "..." : pet.description)}</p>
            <small>📅 {mode === "lost" ? (pet.dateLost || pet.date) : (pet.dateFound || pet.date)}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

