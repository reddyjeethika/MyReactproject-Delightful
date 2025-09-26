import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { desserts } from "../Foodlist.js";
import FoodCard from "./FoodCard.jsx";
import Pagination from "./Pagination";
import "./FoodCard.css";

function Desserts() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(desserts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = desserts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="page-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="header-text">
          <h2>Desserts</h2>
          <p>
            "Indulge your sweet tooth 🍰 – our desserts are little bites of happiness."

Rich chocolates, creamy puddings, and traditional sweets.

Baked treats and chilled delights that melt in your mouth.

Perfect ending to a hearty meal or a sweet snack anytime.

Every bite is a celebration of flavor and decadence.
          </p>
        </div>
        <div className="header-image">
          <img src="/Desserts/Cake.jpg" alt="Desserts" />
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

export default Desserts;
