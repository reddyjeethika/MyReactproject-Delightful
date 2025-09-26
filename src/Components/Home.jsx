// src/Components/Home.jsx
import Carousel from "react-bootstrap/Carousel";
import { Star, StarHalf } from "lucide-react"; // for ratings
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* ✅ Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="/images/Mutton Curry.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Delightful 🍴</h3>
            <p>Delicious meals at your fingertips!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="/images/Banner-2.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Delicious Non-Veg Specials</h3>
            <p>Order your favorites anytime.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="/images/VegFriedRice.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Fresh Veg Specials 🥦</h3>
            <p>Healthy & tasty, just for you.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="/Desserts/Mixed Scoop Icecream.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Refreshing Beverages 🥤</h3>
            <p>Beat the heat with our drinks!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* ✅ Offers Section */}
      <section className="offers">
        <h2>🔥 Special Offers</h2>
        <div className="offer-grid">
          <div className="offer-card">
            <h4>50% Off</h4>
            <p>On first order above ₹500</p>
          </div>
          <div className="offer-card">
            <h4>Buy 1 Get 1</h4>
            <p>On all Beverages this weekend</p>
          </div>
          <div className="offer-card">
            <h4>Free Delivery</h4>
            <p>For orders above ₹300</p>
          </div>
        </div>
      </section>

      {/* ✅ Popular Dishes Section */}
      <section className="popular">
        <h2>🍲 Popular Dishes</h2>
        <div className="dish-grid">
          <div className="dish-card">
            <img src="/images/chicken-biryani.jpg" alt="Biryani" />
            <h4>Chicken Biryani</h4>
            <p>Rich, flavorful, and aromatic.</p>
            <div className="rating">
              <Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><StarHalf size={16} />
            </div>
          </div>

          <div className="dish-card">
            <img src="images/Chilli Chicken.jpg" alt="Pizza" />
            <h4>Chilli chicken</h4>
            <p>Spicy Chicken garnished with tasty veggies.</p>
            <div className="rating">
              <Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} />
            </div>
          </div>

          <div className="dish-card">
            <img src="/Desserts/Chocolate Icecream.jpg" alt="Icecream" />
            <h4>Chocolate Sundae</h4>
            <p>Sweet and creamy indulgence.</p>
            <div className="rating">
              <Star size={16} /><Star size={16} /><Star size={16} /><StarHalf size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Reviews Section */}
      <section className="reviews">
        <h2>💬 Customer Reviews</h2>
        <div className="review-grid">
          <div className="review-card">
            <p>"Absolutely loved the food! Fast delivery & hot meals."</p>
            <h5>- Priya ⭐⭐⭐⭐⭐</h5>
          </div>
          <div className="review-card">
            <p>"Biryani was so flavorful, reminded me of Hyderabad!"</p>
            <h5>- Raj ⭐⭐⭐⭐☆</h5>
          </div>
          <div className="review-card">
            <p>"Best desserts in town. Highly recommend the brownies!"</p>
            <h5>- sara ⭐⭐⭐⭐⭐</h5>
          </div>
        </div>
      </section>

      {/* ✅ Coupons Section */}
      <section className="coupons">
        <h2>🎟️ Available Coupons</h2>
        <ul>
          <li><strong>FREEDRINK</strong> → Free Beverage on orders above ₹250</li>
          <li><strong>SWEETY</strong> → 20% Off on Desserts</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
