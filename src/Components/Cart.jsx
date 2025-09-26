import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  applyCoupon,
  handlePurchase,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../Store/cartSlice";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import QRCode from "react-qr-code";
import { addOrder } from "../Store/ordersSlice"; 

import "./Cart.css"


function Purchase() {
  const dispatch = useDispatch();
  const { items, totalPrice, coupon, discount } = useSelector(
    (state) => state.cart
  );

 const [customerEmail, setCustomerEmail] = useState("");

  const [couponCode, setCouponCode] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  // apply coupon
  const handleApplyCoupon = () => {
  if (!couponCode) {
    Swal.fire("⚠️", "Enter a coupon code", "warning");
    return;
  }

  dispatch(applyCoupon(couponCode));

  Swal.fire({
    title: "🎁 Coupon Applied!",
    text: `Your discount has been applied successfully.`,
    icon: "success",
    confirmButtonText: "OK",
    timer: 2000,
    timerProgressBar: true,
  });
  
};
const orderID = "ORDER" + Math.floor(Math.random() * 10000);

// Email template params
const templateParams = {
  order_id: orderID,
  date: new Date().toLocaleString(),
  orders: items.map((item) => {
    const quantity = item.qty || 1;
    return {
      name: item.name,
      price: (item.price * quantity).toFixed(2),
      units: quantity,
      image_url: item.image, // assuming your item has `image`
    };
  }),
  cost: {
    total: totalPrice.toFixed(2),
    discount: discount ? discount.toFixed(2) : "0.00",
  },
  email: customerEmail, // 👈 this is the email entered by user
};const handleSendEmail = () => {
  if (!customerEmail) {
    Swal.fire("⚠️", "Please enter your email address.", "warning");
    return;
  }

  emailjs
    .send(
      "service_dpfpftf",   // your service ID
      "template_yq4cx6h",  // your template ID
      templateParams,      // ✅ now defined
      "Vh2W2i80Bvvq7vPw3"  // your public key
    )
    .then(() => {
      Swal.fire("✅ Success!", "Order confirmation email sent!", "success");
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      Swal.fire("❌ Failed!", "Email sending failed. Please try again.", "error");
    });
};




const handlePurchaseClick = () => {
  if (items.length === 0) {
    Swal.fire("⚠️", "Your cart is empty!", "warning");
    return;
  }
  if (!paymentMode) {
    Swal.fire("⚠️", "Please select a payment mode", "warning");
    return;
  }
  if (!customerEmail) {
    Swal.fire("⚠️", "Please enter your email", "warning");
    return;
  }

  const newOrder = {
    orderId: "ORDER" + Math.floor(Math.random() * 10000),
    date: new Date().toLocaleString(),
    items: [...items],
    total: totalPrice,
    paymentMode,
    email: customerEmail,
  };

  dispatch(addOrder(newOrder));
  dispatch(handlePurchase());
  handleSendEmail(newOrder.orderId);

  // ✅ SweetAlert then redirect
  Swal.fire({
    title: "🎉 Purchase Successful!",
    text: `Order ID: ${newOrder.orderId}\nTotal: ₹${newOrder.total}`,
    icon: "success",
    confirmButtonText: "OK",
  }).then(() => {
    navigate("/orders"); // ✅ redirect to Orders page
  });
};



  return (
    <div className="cart-container">
      {/* 1st Card → Cart Items */}
      <div className="cart-card">
        <h2>🛒 Cart Items</h2>
        {items.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                </div>
                <div className="item-actions">
                  <div className="qty-controls">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>
                      +
                    </button>
                  </div>
                  <span className="item-price">
                    ₹{item.price * item.qty}
                  </span>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
              
            ))}
          </div>
        )}
      </div>

      {/* 2nd Card → Checkout */}
      <div className="cart-card">
        <h2>💳 Checkout</h2>

        {/* Email field */}
<label>📧 Enter your mail to receive order confirmation</label>
<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <input
    type="email"
    value={customerEmail}
    onChange={(e) => setCustomerEmail(e.target.value)}
    placeholder="you@example.com"
    className="coupon-input"
    style={{ flex: 1 }}
  />
  <button className="cart-btn green" onClick={handleSendEmail}>
    📩 Send Email
  </button>
</div>



        {/* Coupon field */}
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
          <div style={{ textAlign: "center", marginTop: "15px", backgroundColor:"#fc8282ff",color:"white" }}>
        <button className="btn apply-btn" onClick={handleApplyCoupon}>
          Apply Coupon
        </button>
</div>
        {/* Final amount */}
        <h3 className="final-amount">Final Amount: ₹{totalPrice}</h3>
        {coupon && <p>🎁 Discount Applied: -₹{discount}</p>}

        {/* Payment options */}
        <h4>Choose Payment Mode:</h4>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="qr"
              checked={paymentMode === "qr"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            UPI / QR Code
          </label>
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMode === "cod"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>

        {/* QR Code */}
        {paymentMode === "qr" && (
          <div className="qr-section">
            <QRCode
              value={`upi://pay?pa=7013930144@axl&pn=Jeethika&am=${totalPrice}&cu=INR`}
            />
            <p>Scan this QR to pay via UPI</p>
            <p>
              <strong>UPI ID:</strong> 7013930144@axl
            </p>
          </div>
        )}

        {/* Purchase button */}
        <div style={{ textAlign: "center", marginTop: "15px", backgroundColor:"#4fb14aff",color:"white" }}>
       <button className="btn purchase-btn" onClick={handlePurchaseClick}>
  ✅ Complete Purchase
</button>
</div>

<div style={{ textAlign: "center", marginTop: "15px", backgroundColor:"#d73d3dff",color:"white" }}>
  <button
    className="btn clear-btn"
    onClick={() => dispatch(clearCart())}
  >
    🗑️ Clear Cart
  </button>
</div>
      </div>
    </div>
  );
}

export default Purchase;
