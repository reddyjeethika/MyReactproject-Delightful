import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import "./Orders.css";

function Orders() {
  const orders = useSelector((state) => state.orders.list);
  const prevCount = useRef(orders.length);

  useEffect(() => {
    if (orders.length > prevCount.current) {
      const lastOrder = orders[orders.length - 1];

      Swal.fire({
        title: "🎉 Purchase Successful!",
        text: `Order ID: ${lastOrder.orderId}\nTotal: ₹${lastOrder.total}`,
        icon: "success",
        confirmButtonText: "OK",
      });

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      prevCount.current = orders.length;
    }
  }, [orders]);

  if (orders.length === 0) {
    return <h2>No orders yet 🚫</h2>;
  }

  return (
    <div className="orders-container">
      <h2>📦 My Orders</h2>
      {orders.map((order) => (
        <div key={order.orderId} className="order-card">
          <h3>Order ID: {order.orderId}</h3>
          <p>Date: {order.date}</p>
          <p>Payment: {order.paymentMode}</p>
          <p>Total: ₹{order.total}</p>
          <p> Email: {order.email}</p> {/* ✅ show email */}

          <h4>Items:</h4>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>
                {item.name} × {item.qty} = ₹{item.price * item.qty}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Orders;
