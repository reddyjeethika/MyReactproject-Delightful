import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { Home, Leaf, Drumstick, CupSoda, Cake, ShoppingCart, Package, Info, Mail, LogIn } from "lucide-react";


function Navbar() {
 const items = useSelector((state) => state.cart.items);
const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <nav className="navbar">
      {/* Left side: Logo + Name */}
      <div className="brand">
        <img src="/logo.png" alt="Delightful Logo" className="logo-img" />
        <h2 className="logo-text">Delightful</h2>
      </div>

      {/* Right side: Menu Links */}
      <div className="menu">
       <Link to="/"><Home size={18} /> Home</Link>
<Link to="/veg"><Leaf size={18} /> Veg</Link>
<Link to="/nonveg"><Drumstick size={18} /> Non-Veg</Link>
<Link to="/beverages"><CupSoda size={18} /> Beverages</Link>
<Link to="/desserts"><Cake size={18} /> Desserts</Link>
<Link to="/cart"><ShoppingCart size={18} /> Cart</Link>
<Link to="/orders"><Package size={18} /> Orders</Link>
<Link to="/about"><Info size={18} /> About Us</Link>
<Link to="/contact"><Mail size={18} /> Contact Us</Link>
<Link to="/login"><LogIn size={18} /> Login</Link>

      </div>
    </nav>
  );
}

export default Navbar;
