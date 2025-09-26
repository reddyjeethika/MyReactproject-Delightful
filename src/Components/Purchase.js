import React, { useState } from "react";
import Discount from "./Discount"; 



function Purchase() {
  const [finalAmount, setFinalAmount] = useState(0);


  const handleDiscount = (amount) => {
    setFinalAmount(amount);
  };

  const handlePurchase = () => {
  
    alert(`🎉 Purchase successful! Total Amount: ₹${finalAmount}`);
    
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>🛒 Purchase Options</h2>

      
      <Discount onApplyDiscount={handleDiscount} />

 
      <h3 style={{ marginTop: "20px" }}>Final Amount: ₹{finalAmount}</h3>

      </div>
      
    
      
  );
}

export default Purchase;
