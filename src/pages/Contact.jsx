import React from "react";
import contactImg from "../assets/C.png"; 

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section className="section contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Have questions, suggestions, or a story to share? We’d love to hear
            from you! Use the form below or reach out through our social channels.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" required />
            </div>
            <button className="btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-image">
          <img src={contactImg} alt="Cute pets" /> 
        </div>
      </div>
    </section>
  );
}
