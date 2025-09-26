import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Veg from "./Components/Veg";
import NonVeg from "./Components/Nonveg";
import Beverages from "./Components/Beverages";
import Desserts from "./Components/Desserts";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import Signup from "./Components/Signup";
import store from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            
            <Route path="/" element={<Login />} />

          
            <Route path="/home" element={<Home />} />

            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<NonVeg />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/cart" element={<Cart />} />
             <Route path="/signup" element={<Signup />} /> 
            <Route path="/orders" element={<Orders />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
          </Routes>

          {/* ✅ Toast + Footer are global */}
          <ToastContainer position="top-right" autoClose={2000} />
          <Footer />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
