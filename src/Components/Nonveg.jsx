import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { nonVegItems } from "../Foodlist.js";
import FoodCard from "./FoodCard.jsx";
import Pagination from "./Pagination";
import "./FoodCard.css";

function NonVeg() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = nonVegItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="page-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="header-text">
          <h2>Non-Veg Specials</h2>
          <p>
            "Juicy, spicy, and packed with flavor 🍗 – our non-veg specials are made to satisfy every craving!"

Succulent chicken, fish, and mutton dishes cooked in authentic styles.

Rich marinades, bold spices, and slow-cooked perfection.

Ideal for meat lovers seeking a hearty, satisfying meal.

From fiery tandoori treats to comforting home-style curries.
          </p>
        </div>
        <div className="header-image">
          <img src="/images/Fish fry.jpg" alt="Non-Veg Dishes" />
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
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default NonVeg;
