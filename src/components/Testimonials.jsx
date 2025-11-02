import React from "react";
import u1 from "../assets/user1.jpg";
import u2 from "../assets/user2.jpg";
import u3 from "../assets/user3.jpg";

export default function Testimonials(){
  const items = [
    {img:u1, quote:"Thanks to PetFinder, we found our dog Max within days!", by:"Srinadh K."},
    {img:u2, quote:"This site helped me return a lost cat to its owner.", by:"Danush P."},
    {img:u3, quote:"Easy to use and very helpful community.", by:"Priya S."}
  ];
  return (
    <section className="section testimonials">
      <h2>What People Say</h2>
      <div className="testimonials-grid">
        {items.map((t, i)=>(
          <div className="testimonial" key={i}>
            <img src={t.img} alt={t.by} />
            <blockquote>{t.quote}</blockquote>
            <cite>— {t.by}</cite>
          </div>
        ))}
      </div>
    </section>
  );
}
