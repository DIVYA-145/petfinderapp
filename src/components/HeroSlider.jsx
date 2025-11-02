import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const slides = [
  {
    id: 1,
    bg: pic3,
    title: "Find Your Furry Friend Help Reunite Lost Pets",
    text: "Join our mission to help lost pets find their way home. Report a lost or found pet easily.",
    ctas: [
      { label: "Report Lost Pet", to: "/add-pet?mode=lost" },
      { label: "Report Found Pet", to: "/add-pet?mode=found" }
    ]
  },
  {
    id: 2,
    bg: pic2,
    title: "Every Paw Deserves to Be Found",
    text: "Your small action can make a big difference — help families reunite with their pets.",
    ctas: [{ label: "View Lost Pets", to: "/lost-pets" }]
  },
  {
    id: 3,
    bg: pic1,
    title: "See a Pet? Report It!",
    text: "Found a stray or injured pet? Post it here to help locate its family.",
    ctas: [{ label: "View Found Pets", to: "/found-pets" }]
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.bg})` }}
        >
          <div className="overlay" />
          <div className="hero-content">
            <h1>{s.title}</h1>
            <p>{s.text}</p>
            <div className="hero-buttons">
              {s.ctas.map((c, idx) => (
                <Link
                  key={idx}
                  className={idx === 0 ? "btn-primary" : "btn-outline"}
                  to={c.to} // ✅ React Router navigation
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
 