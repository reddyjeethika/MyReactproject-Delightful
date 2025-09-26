import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { vegItems } from "../Foodlist.js";
import FoodCard from "./FoodCard.jsx";
import Pagination from "./Pagination";
import { useState } from "react";
import "./FoodCard.css"; // CSS we’ll add

function Veg() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(vegItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = vegItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="page-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="header-text">
          <h2>Vegetarian Dishes</h2>
          <p>
           Fresh, wholesome, and bursting with flavor 🌱 – our veg dishes are a paradise for every vegetarian foodie."

Savor garden-fresh ingredients cooked to perfection.

From creamy paneer delights to spicy mixed vegetable curries.

Healthy, colorful, and satisfying meals that nourish both body and soul.

Perfect for those who love vibrant flavors without compromising on nutrition.
          </p>
        </div>
        <div className="header-image">
          <img
            src="/images/Paneer Biryani.jpg" // put your own image
            alt="Vegetarian Dishes"
          />
        </div>
      </div>

      {/* Food Grid */}
      <div className="food-grid">
        {currentItems.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            onAddToCart={() => dispatch(addToCart(item))}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Veg;
