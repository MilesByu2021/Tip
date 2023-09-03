export const getOrderFromUser = () => {
  let userOrder = prompt("What would you like to order?").toLowerCase();
  return userOrder;
};
