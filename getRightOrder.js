export const getRightOrder = (fastFoodPrice) => {
  const tipPercentage = +prompt(`How many percetage would you like to tip?`);
  const tipConverter = 1 + tipPercentage / 100;
  const totalPrice = tipConverter * fastFoodPrice;
  return alert(`Total will be ${totalPrice.toFixed(2)}! Thank you`);
};
