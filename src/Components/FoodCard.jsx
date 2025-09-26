import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { toast } from "react-toastify";
import "./FoodCard.css";

function FoodCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} className="food-img" />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button
        className="add-btn"
        onClick={() => {
          dispatch(addToCart(item));
          toast.success(`${item.name} added to cart!`);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
