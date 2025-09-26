import React, { useState } from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";
import Feedback from "react-bootstrap/esm/Feedback";

function Footer() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (!firstName || !email) {
      toast.error("Please enter both name and email!");
    } else {
      toast.success(`Successfully sent`);
      setFirstName("");
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section">
          <h4>Delightful</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/offers">Special Offers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Food & Recipes Section */}
        <div className="footer-section">
          <h4>Food & Recipes</h4>
          <ul>
            <li><a href="/veg">Veg Specials</a></li>
            <li><a href="/nonveg">Non-Veg Specials</a></li>
            <li><a href="/desserts">Desserts</a></li>
            <li><a href="/beverages">Beverages</a></li>
          </ul>
        </div>

        {/* Signup Section */}
        <div className="footer-section signup">
          <h4>Sign Up for Updates</h4>
          <p>If u want provide feedback provide here!</p>
          <div className="signup-box">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
                <input type="text" placeholder="Feedback" />
            <button onClick={handleSignup}>GO</button>
          </div>
        </div>
      </div>

      {/* Social + Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <Instagram size={20} />
          <Facebook size={20} />
          <Twitter size={20} />
          <Youtube size={20} />
          <Linkedin size={20} />
        </div>
        <p>© 2025 Delightful. All Rights Reserved.</p>
        <p>
          Made with ❤️ by Our Team | <a href="/about">About Us</a> |{" "}
          <a href="/contact">Contact</a>
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </footer>
  );
}

export default Footer;
