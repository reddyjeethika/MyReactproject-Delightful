import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { beverages } from "../Foodlist.js";
import FoodCard from "./FoodCard.jsx";
import Pagination from "./Pagination";
import "./FoodCard.css";

function Beverages() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(beverages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = beverages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="page-container">
      {/* Section Header */}
      <div className="section-header">
        <div className="header-text">
          <h2>Beverages</h2>
          <p>
           "Refresh, recharge, and delight your taste buds 🥤 – our drinks are perfect for every mood."

Cool smoothies, fresh juices, and classic soft drinks.

Hot teas, coffees, and herbal infusions to lift your spirits.

Crafted to quench thirst and add a splash of joy.

Sweet, tangy, or refreshing – there’s a drink for every craving.
          </p>
        </div>
        <div className="header-image">
          <img src="/Beverages/Coffee.jpg" alt="Beverages" />
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

export default Beverages;
