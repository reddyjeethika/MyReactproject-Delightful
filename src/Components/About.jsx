import React from "react";
import "./About.css";

function About() {
  const team = [
    {
      name: "Jeethika",
      role: "Founder & Developer",
      image: "/images/Jeethika.jpg", // replace with your image
      description:
        "Jeethika is the voice, author, and creator behind Delightful. She develops recipes and manages the website. What started as a fun project is now a full-fledged platform.",
    },
    {
      name: "Ravi",
      role: "Chef & Food Stylist",
      image: "/images/person2.jpg",
      description:
        "Ravi is our head chef and food stylist. He brings creativity and taste together to make our dishes unforgettable. You’ll often find him experimenting in the kitchen.",
    },
    {
      name: "Andrew",
      role: "Marketing & Community Manager",
      image: "/images/person1.jpg",
      description:
        "Andrew handles our community and social media. he connects with customers and ensures everyone feels part of the Delightful family.",
    },
    {
      name: "Anjali",
      role: "Marketing & Community Manager",
      image: "/images/person3.jpg",
      description:
        "Anjali handles our community and social media. She connects with customers and ensures everyone feels part of the Delightful family.",
    },
  ];

  return (
    <div className="about-container">
      {/* 🍰 Welcome Section */}
      <div className="about-card">
        <h1 className="about-title">🍰 Welcome to Foodie Delight! 🍓</h1>
        <p>
          Welcome to <strong>Delightful</strong> 🍴 – where taste meets tradition!  
          We serve a wide variety of veg, non-veg, beverages, and desserts prepared with love.  
          Our mission is to bring happiness to your dining experience.  
        </p>
        <p className="about-text">
          At <strong>Foodie Delight</strong>, we believe that every meal should end
          on a sweet note. 💖  
          From traditional <em>Gulab Jamuns</em> that melt in your mouth to
          rich, creamy <em>Chocolate Ice Creams</em>, we bring you desserts and
          treats that make every occasion special. 🎉
        </p>
        <p className="about-text">
          Our chefs use <span className="highlight">fresh ingredients</span>,
          a pinch of love 💕, and a sprinkle of happiness 🌸 to serve food that
          feels like home. Whether you’re a fan of spicy curries, crispy snacks,
          or sweet delights, we’ve got something just for you!
        </p>
        <p className="about-text">
          Thank you for choosing us to be a part of your sweetest moments.  
          Let’s celebrate food, family, and joy — one bite at a time! ✨
        </p>
      </div>

      {/* 👨‍🍳 Team Section */}
      <h2 className="about-title">OUR TEAM</h2>
      <p className="about-intro">
        We have an amazing team behind Delightful who are experts in everything
        – from cooking and styling to customer service and marketing.  
        They are EVERYTHING. Our team helps keep it all running smoothly.
      </p>

      {team.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.image} alt={member.name} className="team-image" />
          <div className="team-info">
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
