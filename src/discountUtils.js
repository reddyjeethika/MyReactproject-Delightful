// src/utils/discountUtils.js
// Returns discount info for a coupon and totalPrice
export function getCouponDiscount(coupon, totalPrice = 0) {
  if (!coupon) {
    return { isValid: false, discountPercent: 0, discountAmount: 0, fixedAmount: false };
  }

  const code = coupon.trim().toUpperCase();
  let discountPercent = 0;

  // Examples: percent-based coupons
  switch (code) {
    case "HAPPY10":
      discountPercent = 10;
      break;
    case "HUNGRY20":
      discountPercent = 20;
      break;
    case "WELCOME30":
      discountPercent = 30;
      break;
    // Example fixed-amount coupon: SWEETY -> ₹200 off if total > 1000
    case "SWEETY":
      if (totalPrice > 1000) {
        return { isValid: true, discountPercent: 0, discountAmount: 200, fixedAmount: true };
      } else {
        return { isValid: false, discountPercent: 0, discountAmount: 0, fixedAmount: true };
      }
    default:
      discountPercent = 0;
  }

  const discountAmount = Math.round((totalPrice * discountPercent) / 100);
  return {
    isValid: discountPercent > 0,
    discountPercent,
    discountAmount,
    fixedAmount: false,
  };
}
