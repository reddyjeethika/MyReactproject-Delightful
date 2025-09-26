import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can integrate EmailJS or backend API later
    console.log("Form Submitted:", formData);

    alert("✅ Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">📩 Contact Us</h2>
      <p className="contact-intro">
        We’d love to hear from you! Whether it’s feedback, queries, or just a
        hello 👋 — reach out to us anytime.
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-btn">Send Message 🚀</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>⟟ Our Address</h3>
          <p>Delightful HQ, Tadepalligudem, Andhra Pradesh, India</p>

          <h3>☎ Call Us</h3>
          <p>+91 98765 43210</p>

          <h3>✉︎ Email</h3>
          <p>rjeethika@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
